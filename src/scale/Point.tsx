import { scalePoint } from 'd3-scale';

const radius = 10;
const domain = [0, 1, 2, 3];
const range = [0, 400];

const func1 = scalePoint<number>().domain(domain).range(range);
const func2 = scalePoint<number>().domain(domain).range(range).padding(0.1);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleBand</h1>
      <h3>
        No padding <small>(step:{func1.step()})</small>
      </h3>
      <div className="point-list">
        {domain.map((value) => {
          return (
            <div
              className="point"
              key={value}
              style={{
                marginLeft: -radius,
                width: radius * 2,
                height: radius * 2,
                left: func1(value),
              }}
            />
          );
        })}
      </div>

      <h3>
        Padding <small>(step:{func2.step()})</small>
      </h3>
      <div className="point-list">
        {domain.map((value) => {
          return (
            <div
              className="point"
              key={value}
              style={{
                marginLeft: -radius,
                width: radius * 2,
                height: radius * 2,
                left: func2(value),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
