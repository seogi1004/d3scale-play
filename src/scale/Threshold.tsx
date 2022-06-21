import { scaleLinear, scaleThreshold } from 'd3-scale';
import { max } from 'd3-array';
import { sampleData } from './data/threshold';

const linear = scaleLinear<string>()
  .domain([0, max(sampleData) || 0])
  .range(['white', 'red']);

// 10000보다 작으면 white, 100000보다 크면 red, 나머지는 pink
const threshold = scaleThreshold<number, string>()
  .domain([10000, 100000])
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleThreshold (한계점)</h1>
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
      <h3>threshold</h3>
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
    </div>
  );
}
