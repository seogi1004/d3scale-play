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
      <div className="description">
        최대값이 극단적으로 클 경우, 결과값의 분포를 비교적 완만하게 보정해주는
        스케일입니다.
      </div>
      <div className="formula">y = mlog(x) + b</div>
      <pre>const data = [ 10, 100, 10000, 1000000 ];</pre>
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
