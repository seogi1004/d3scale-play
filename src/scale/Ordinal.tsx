import { scaleOrdinal } from 'd3-scale';

const sampleData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const func = scaleOrdinal<number, string>()
  .domain([0, 1])
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleOrdinal (서수)</h1>
      <div className="box-list">
        {sampleData.map((value, index) => {
          return (
            <div
              className="box"
              style={{ backgroundColor: func(value) }}
              title={`${value}`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
