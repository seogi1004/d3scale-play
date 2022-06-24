import { scaleLinear, scaleQuantile } from 'd3-scale';
import { max, extent } from 'd3-array';
import { sampleData } from './data/threshold';

const linear = scaleLinear<string>()
  .domain([0, max(sampleData) || 0])
  .range(['white', 'red']);

// 100개의 데이터를 균등하게 나눠서 값의 크기에 맞게 분류함
const quantile = scaleQuantile<string>()
  .domain(sampleData) // pass only the extreme values to a scaleQuantize’s domain
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleQuantile (분위수)</h1>
      <div className="description">
        domain을 동일한 절대 빈도의 간격으로 분할합니다. 분할 수는 range에
        정의된 값들의 수와 같습니다.
      </div>
      <h3>linear</h3>
      <div className="box-list">
        {sampleData.map((value, index) => {
          return (
            <div
              className="box"
              style={{ backgroundColor: linear(value) }}
              title={`${value}`}
              key={index}
            ></div>
          );
        })}
      </div>
      <h3>quantile</h3>
      <pre>
        // 100개의 데이터를 균등하게 나눠서 값의 크기에 맞게 분류함
        <br />
        <br />
        const sampleData: number[] = [ 11002, 29017, 21699, 47058, 24001, 6000,
        ... ];
        <br />
        const quantile = scaleQuantile{'<'}
        string{'>'}() .domain(sampleData)
        <br />
        .range(['white', 'pink', 'red']);
      </pre>
      <div className="box-list">
        {sampleData.map((value, index) => {
          return (
            <div
              className="box"
              style={{ backgroundColor: quantile(value) }}
              title={`${value}`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
