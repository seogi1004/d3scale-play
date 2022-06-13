import { scaleLinear, scalePow, scaleSqrt } from 'd3-scale';
import type { Pair } from '../types';

export default function PowerScale() {
  const DOMAIN: Pair = [0, 100];
  const RANGE: Pair = [10, 50];

  // func1(Math.pow(50, exponent) / Math.pow(100, exponent - 1))
  // func1(50 ** exponent / 100 ** (exponent - 1))
  const func1 = scaleLinear().domain(DOMAIN).range(RANGE);

  // y = 2x^0.5 + 0
  const func21 = scalePow().exponent(0.5).domain(DOMAIN).range(RANGE);
  const func22 = scaleSqrt().domain(DOMAIN).range(RANGE);
  const func23 = scalePow().exponent(2).domain(DOMAIN).range(RANGE);

  const chartData = [0, 25, 50, 75, 100];

  return (
    <div className="scale">
      <h1>scalePower</h1>
      <h3>
        domain(0, 100) -&gt; range(10, 50) :&nbsp;
        <small>data(0, 25, 50, 75, 100)</small>
      </h3>
      <div className="point-list flex">
        {chartData.map((value, index) => {
          return (
            <div
              className="point"
              key={index}
              style={{
                width: func1(value),
                height: func1(value),
                left: 87 * index,
              }}
            />
          );
        })}
      </div>
      <h3>exponent(0.5)</h3>
      <div className="point-list flex">
        {chartData.map((value, index) => {
          return (
            <div
              className="point"
              key={index}
              style={{
                width: func21(value),
                height: func21(value),
                left: 87 * index,
              }}
            />
          );
        })}
      </div>
      <h3>sqrt</h3>
      <div className="point-list flex">
        {chartData.map((value, index) => {
          return (
            <div
              className="point"
              key={index}
              style={{
                width: func22(value),
                height: func22(value),
                left: 87 * index,
              }}
            />
          );
        })}
      </div>
      <h3>exponent(2)</h3>
      <div className="point-list">
        {chartData.map((value, index) => {
          return (
            <div
              className="point"
              key={index}
              style={{
                width: func23(value),
                height: func23(value),
                left: 87 * index,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
