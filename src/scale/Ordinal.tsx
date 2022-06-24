import { scaleOrdinal } from 'd3-scale';

const sampleData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const func = scaleOrdinal<number, string>()
  .domain([0, 1])
  .range(['white', 'pink', 'red']);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleOrdinal (서수)</h1>
      <div className="description">
        지정된 domain과 range를 갖는 순서를 나타내는 스케일을 생성하고 반환하는
        데 사용됩니다.
      </div>
      <pre>
        const func = scaleOrdinal{'<'}number, string{'>'}() .domain([0, 1])
        <br />
        .range(['white', 'pink', 'red']);
        <br />
        <br />
        func(0); // white
        <br />
        func(1); // pink
        <br />
        func(2); // red
        <br />
        func(3); // white
        <br />
        ...
      </pre>
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
