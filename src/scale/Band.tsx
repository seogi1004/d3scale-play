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
        Linear 스케일과 비슷하게 동작하지만 Domain 사이에 여백(padding)을 비율로
        설정할 수 있으며, 일반적으로 바나 컬럼 차트를 구현할 때, 사용하는
        목적으로 만들어졌습니다.
        <br />
        <br />
        <img src={Image} />
      </div>
      <pre>
        const domain = [0, 1, 2, 3]; <br />
        const range = [0, 400]; <br />
        const func1 = scaleBand&lt;number&gt;().domain(domain).range(range);
        <br />
        const func2 = scaleBand&lt;number&gt;().domain(domain).range(range)
        <br />
        .paddingInner(0.6);
        <br />
        const func3 = scaleBand&lt;number&gt;().domain(domain).range(range)
        <br />
        .paddingOuter(0.2).align(0.5); // 0이면 맨 왼쪽으로 당김
      </pre>
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
