import {
  scaleLinear,
  scaleThreshold,
  scaleQuantize,
  scaleQuantile,
} from 'd3-scale';
import { max, extent } from 'd3-array';
import { sampleData } from './data';

const linear = scaleLinear<string>()
  .domain([0, max(sampleData) || 0])
  .range(['white', 'red']);

// 10000보다 작으면 white, 100000보다 크면 red, 나머지는 pink
const threshold = scaleThreshold<number, string>()
  .domain([10000, 100000])
  .range(['white', 'pink', 'red']);

// domain은 [0, 300577]
// 0~100192 white, 100193~200384 pink, 200385~300577 red
const quantize = scaleQuantize<string>()
  .domain(extent(sampleData) as [number, number]) // pass only the extreme values to a scaleQuantize’s domain
  .range(['white', 'pink', 'red']);

// 100개의 데이터를 균등하게 나눠서 값의 크기에 맞게 분류함
const quantile = scaleQuantile<string>()
  .domain(sampleData) // pass only the extreme values to a scaleQuantize’s domain
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleLinear</h1>
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
      <h1>scaleThreshold</h1>
      <div className="box-list">
        {sampleData.map((value, index) => {
          return (
            <div
              className="box"
              style={{ backgroundColor: threshold(value) }}
              title={`${value}`}
              key={index}
            ></div>
          );
        })}
      </div>
      <h1>scaleQuantize</h1>
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
      <h1>scaleQuantile</h1>
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
