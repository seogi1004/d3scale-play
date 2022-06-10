import { scaleBand, scaleOrdinal } from 'd3-scale';

const domain = [0, 1, 2, 3];
const range = [0, 400];

const color = scaleOrdinal<number, string>()
  .domain(domain)
  .range(['red', 'green', 'blue', 'gray']);

const func1 = scaleBand<number>().domain(domain).range(range);

const func2 = scaleBand<number>().domain(domain).range(range).paddingInner(0.6);

const func3 = scaleBand<number>().domain(domain).range(range).paddingOuter(0.2);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleBand</h1>
      <h3>
        No padding <small>(step:{func1.step()})</small>
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
        Inner padding <small>(step:{func2.step()})</small>
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
        Outer padding <small>(step:{func3.step()})</small>
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
