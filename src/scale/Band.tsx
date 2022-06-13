import { scaleBand, scaleOrdinal } from 'd3-scale';
import Image from '../images/scaleBand.png';

const domain = [0, 1, 2, 3];
const range = [0, 400];

const color = scaleOrdinal<number, string>()
  .domain(domain)
  .range(['red', 'green', 'blue', 'gray']);

const func1 = scaleBand<number>().domain(domain).range(range);

const func2 = scaleBand<number>().domain(domain).range(range).paddingInner(0.6);

const func3 = scaleBand<number>()
  .domain(domain)
  .range(range)
  .paddingOuter(0.2)
  .align(0.5); // 0이면 맨 왼쪽으로 당김

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleBand</h1>
      <div className="description">
        <img src={Image} />
      </div>

      <h3>
        no padding <small>(step:{func1.step()})</small>
      </h3>
      <div className="column-list">
        {domain.map((seq) => {
          return (
            <div
              className="column"
              key={seq}
              style={{
                backgroundColor: color(seq),
                width: func1.bandwidth(),
                left: func1(seq),
              }}
            />
          );
        })}
      </div>
      <h3>
        inner padding <small>(step:{func2.step()})</small>
      </h3>
      <div className="column-list">
        {domain.map((seq) => {
          return (
            <div
              className="column"
              key={seq}
              style={{
                backgroundColor: color(seq),
                width: func2.bandwidth(),
                left: func2(seq),
              }}
            />
          );
        })}
      </div>
      <h3>
        outer padding <small>(step:{func3.step()})</small>
      </h3>
      <div className="column-list">
        {domain.map((seq) => {
          return (
            <div
              className="column"
              key={seq}
              style={{
                backgroundColor: color(seq),
                width: func3.bandwidth(),
                left: func3(seq),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
