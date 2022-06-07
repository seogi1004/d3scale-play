import { scaleLinear, scalePow, scaleSqrt } from 'd3-scale';
import type { Pair } from '../types';

export default function Scale() {
  const DOMAIN: Pair = [0, 100];
  const RANGE: Pair = [0, 200];

  // func1(Math.pow(50, exponent) / Math.pow(100, exponent - 1))
  const func1 = scaleLinear().domain(DOMAIN).range(RANGE);

  // y = 2x^0.5 + 0
  const exponent = 0.5;
  const func21 = scalePow().exponent(exponent).domain(DOMAIN).range(RANGE);
  const func22 = scaleSqrt().domain(DOMAIN).range(RANGE);

  return (
    <div className="scale">
      <h1>scalePow, scaleSqrt</h1>
      <h2>
        {func1(0)}, {func1(50 ** exponent / 100 ** (exponent - 1))},{' '}
        {func1(100)}
      </h2>
      <h2>
        {func21(0)}, {func21(50)}, {func21(100)}
      </h2>
      <h2>
        {func22(0)}, {func22(50)}, {func22(100)}
      </h2>
    </div>
  );
}
