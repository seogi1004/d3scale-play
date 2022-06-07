import { scaleLinear } from 'd3-scale';
import type { Pair } from '../types';

function tempScaleLinear(domain: Pair, range: Pair) {
  const a = domain[1] - domain[0];
  const b = range[1] - range[0];
  return function (x: number) {
    return (b / a) * x;
  };
}

export default function Scale() {
  const DOMAIN: Pair = [0, 99.91232];
  const RANGE: Pair = [0, 200];

  // y = 2x + 0
  const tempFunc = tempScaleLinear(DOMAIN, RANGE);
  const func1 = scaleLinear().domain(DOMAIN).range(RANGE).nice();

  return (
    <div className="scale">
      <h1>scaleLinear</h1>
      <h2>
        {tempFunc(0)}, {tempFunc(50)}, {tempFunc(100)}
      </h2>
      <h2>
        {func1(0)}, {func1(50)}, {func1(100)}
      </h2>
      <h1>Utility</h1>
      <h2>{func1.domain().join(' ~ ')}</h2>
      <h2>{func1.ticks(5).join(' ~ ')}</h2>
      <h2>{func1.invert(100)}</h2>
      <hr />
    </div>
  );
}
