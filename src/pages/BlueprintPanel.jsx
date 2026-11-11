import React from 'react';
import './blueprintpanel.css';

const LOGO_LINE =
  'M14.9297 28.1893C11.3454 24.6551 11.3454 18.925 14.9297 15.3908C18.5139 11.8566 24.3252 11.8566 27.9094 15.3908L57.3897 44.4595C59.3131 46.356 62.5702 44.9935 62.5702 42.2923V36.9103C62.5702 32.2074 60.685 27.7009 57.3363 24.399C54.4597 21.5625 54.4597 16.9638 57.3363 14.1273C60.2129 11.2909 64.8768 11.2909 67.7534 14.1273L83.8426 29.9919C86.7192 32.8283 86.7191 37.4271 83.8425 40.2635C80.9659 43.1 76.3021 43.1 73.4255 40.2635C72.9557 39.8004 72.1603 40.1311 72.1603 40.7908V54.8426C72.1603 57.5191 73.2332 60.0818 75.1391 61.961L80.9211 67.6623C84.5053 71.1965 84.5053 76.9266 80.9211 80.4608C77.3368 83.995 71.5256 83.995 67.9413 80.4608L38.5537 51.4835C36.6305 49.5872 33.3739 50.9495 33.3739 53.6504V58.9511C33.3739 63.7047 35.2795 68.2599 38.6643 71.5975C41.5418 74.4347 41.5418 79.0348 38.6643 81.8721C35.7869 84.7093 31.1217 84.7093 28.2443 81.8721L12.1581 66.0105C9.28064 63.1732 9.28064 58.5731 12.1581 55.7358C15.0355 52.8986 19.7007 52.8986 22.5782 55.7358C23.0258 56.1773 23.7839 55.8601 23.7839 55.2315V41.1033C23.7839 38.4267 22.7109 35.8619 20.8051 33.9827L14.9297 28.1893Z';

// Circles fitted to the arcs of the mark: [cx, cy, r, label angle (deg)]
const CAPS = [
  [21.3, 21.9, 9.1, -134.3],
  [62.45, 19.35, 7.3, -134.3],
  [78.7, 35.05, 7.3, 45.5],
  [74.55, 73.95, 9.1, 45.7],
  [33.55, 76.65, 7.3, 45.6],
  [17.3, 60.95, 7.3, -134.5],
];
const FILLETS = [
  [45.0, 36.91, 17.57, -22.7],
  [51.13, 58.95, 17.76, 157.3],
  [82.15, 54.84, 9.99, 157.3],
  [13.78, 41.1, 10.0, -22.7],
];
const SMALL = [
  [59.53, 42.3, 3.04, 67.3],
  [36.41, 53.64, 3.04, -112.7],
];
const ALL = [...CAPS, ...FILLETS, ...SMALL];

// Straight edges of the mark, extended as tangent lines
const EDGES = [
  [27.91, 15.39, 57.39, 44.46],
  [67.75, 14.13, 83.84, 29.99],
  [75.14, 61.96, 80.92, 67.66],
  [67.94, 80.46, 38.55, 51.48],
  [28.24, 81.87, 12.16, 66.01],
  [20.81, 33.98, 14.93, 28.19],
  [62.57, 42.29, 62.57, 36.91],
  [72.16, 40.79, 72.16, 54.84],
  [33.37, 53.65, 33.37, 58.95],
  [23.78, 55.23, 23.78, 41.1],
];

const LONG = 400;
const rad = (deg) => (deg * Math.PI) / 180;
const fmt = (n) => n.toFixed(2);

function extend([x1, y1, x2, y2]) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  return [x1 - ux * LONG, y1 - uy * LONG, x2 + ux * LONG, y2 + uy * LONG];
}

function BlueprintPanel() {
  return (
    <section className='blueprint-section'>
      <div className='blueprint-panel'>
        <header className='blueprint-meta'>
          <span>(02) Mark</span>
          <span>Construction</span>
          <span>Fig. 1</span>
        </header>

        <svg
          className='blueprint-svg'
          viewBox='-64 -32 224 160'
          preserveAspectRatio='xMidYMid meet'
          role='img'
          aria-label='Line drawing of the Nimbial brand mark with its construction circles'
        >
          <defs>
            <pattern id='bp-grid' width='6' height='6' patternUnits='userSpaceOnUse'>
              <path d='M6 0H0V6' fill='none' stroke='#000' strokeOpacity='0.07' strokeWidth='0.5' />
            </pattern>
          </defs>

          <rect x='-1000' y='-1000' width='2200' height='2200' fill='url(#bp-grid)' />

          {/* tangent lines along every straight edge */}
          <g className='bp-line bp-faint'>
            {EDGES.map((e, i) => {
              const [a, b, c, d] = extend(e);
              return <line key={i} x1={fmt(a)} y1={fmt(b)} x2={fmt(c)} y2={fmt(d)} />;
            })}
          </g>

          {/* centre axes and bounding square */}
          <g className='bp-line bp-faint'>
            <line x1={-LONG} y1='48' x2={LONG} y2='48' />
            <line x1='48' y1={-LONG} x2='48' y2={LONG} />
          </g>
          <rect className='bp-line bp-dash' x='0' y='0' width='96' height='96' fill='none' />

          {/* circles contouring each arc of the mark */}
          <g fill='none' className='bp-line'>
            {ALL.map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} />
            ))}
          </g>

          {/* centre marks, radius leaders and labels */}
          <g className='bp-line'>
            {ALL.map(([cx, cy, r, a], i) => {
              const ex = cx + r * Math.cos(rad(a));
              const ey = cy + r * Math.sin(rad(a));
              const tx = cx + (r + 3) * Math.cos(rad(a));
              const ty = cy + (r + 3) * Math.sin(rad(a));
              const anchor = Math.cos(rad(a)) > 0.3 ? 'start' : Math.cos(rad(a)) < -0.3 ? 'end' : 'middle';
              const big = r > 5;
              return (
                <g key={i}>
                  <line x1={cx - 1.6} y1={cy} x2={cx + 1.6} y2={cy} />
                  <line x1={cx} y1={cy - 1.6} x2={cx} y2={cy + 1.6} />
                  {big && (
                    <>
                      <line x1={cx} y1={cy} x2={fmt(ex)} y2={fmt(ey)} />
                      <text
                        className='bp-text'
                        x={fmt(tx)}
                        y={fmt(ty + 0.8)}
                        textAnchor={anchor}
                      >
                        R{r.toFixed(1)}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </g>

          {/* the mark, in a hairline */}
          <path className='bp-logo' d={LOGO_LINE} fill='none' />
        </svg>

        <footer className='blueprint-meta blueprint-meta-bottom'>
          <span>Est. 2024</span>
        </footer>
      </div>
    </section>
  );
}

export default BlueprintPanel;
