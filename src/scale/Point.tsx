import { scalePoint } from 'd3-scale';
import Image from '../images/scalePoint.png';

const radius = 10;
const domain = [0, 1, 2, 3];
const range = [0, 400];

const func1 = scalePoint<number>().domain(domain).range(range);
const func2 = scalePoint<number>().domain(domain).range(range).padding(0.1);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scalePoint</h1>
      <div className="description">
        Band 스케일과 달리 Domain 개별로 여백이 적용되며, bandwidth 개념이 없고,
        (최대 Range / Domain 개수)로 시작점을 정합니다.
        <br />
        <br />
        <img src={Image} />
      </div>

      <h3>
        no padding <small>(step:{func1.step()})</small>
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
        padding <small>(step:{func2.step()})</small>
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
