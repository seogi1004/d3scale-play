import { scaleLog, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

const data = [
  10,
  100,
  10000,
  1000000, // 1 million
  100000000, // 100 million
];

const log = scaleLog()
  .domain(extent(data) as [number, number])
  .range([10, 600]);

const linear = scaleLinear()
  .domain(extent(data) as [number, number])
  .range([10, 600]);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleLog</h1>
      <h3>linear</h3>
      <div className="bar-list">
        {data.map((value, index) => {
          return (
            <div
              className="bar"
              key={index}
              style={{
                width: linear(value),
              }}
            />
          );
        })}
      </div>
      <h3>log</h3>
      <div className="bar-list">
        {data.map((value, index) => {
          return (
            <div
              className="bar"
              key={index}
              style={{
                width: log(value),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
