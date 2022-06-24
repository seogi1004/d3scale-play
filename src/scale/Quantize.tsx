import { scaleLinear, scaleQuantize } from 'd3-scale';
import { max, extent } from 'd3-array';
import { sampleData } from './data/threshold';

const linear = scaleLinear<string>()
  .domain([0, max(sampleData) || 0])
  .range(['white', 'red']);

// domain은 [0, 300577]
// 0~100192 white, 100193~200384 pink, 200385~300577 red
const quantize = scaleQuantize<string>()
  .domain(extent(sampleData) as [number, number]) // pass only the extreme values to a scaleQuantize’s domain
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleQuantize (양자화)</h1>
      <div className="description">
        domain 범위에서 임계값 선택을 처리하고, range에 정의된 값들의 수만큼
        규칙적인 간격으로 세분화합니다.
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
      <h3>quantize</h3>
      <pre>
        // 0~100192 white, 100193~200384 pink, 200385~300577 red
        <br />
        <br />
        const quantize = scaleQuantize{'<'}
        string{'>'}() .domain([0, 300577])
        <br />
        .range(['white', 'pink', 'red']);
      </pre>
      <div className="box-list">
        {sampleData.map((value, index) => {
          return (
            <div
              className="box"
              style={{ backgroundColor: quantize(value) }}
              title={`${value}`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
