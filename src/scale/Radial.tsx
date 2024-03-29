import { scaleRadial, scaleBand, scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const width = 460 - margin.left - margin.right;
const height = 460 - margin.top - margin.bottom;
const innerRadius = 80;
const outerRadius = Math.min(width, height) / 2;
const transform = `translate(${width / 2} ${height / 2})`;

const data = Array(200)
  .fill({
    name: '',
    value: 0,
  })
  .map((row, index) => {
    return {
      name: `name_${index}`,
      value: Math.floor(Math.random() * outerRadius),
    };
  });

export function getPoints(
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number,
) {
  const sumRadius = innerRadius + outerRadius;
  const x1 = Math.cos(startAngle) * innerRadius;
  const y1 = Math.sin(startAngle) * innerRadius;
  const x2 = Math.cos(endAngle) * innerRadius;
  const y2 = Math.sin(endAngle) * innerRadius;
  const x3 = Math.cos(endAngle) * sumRadius;
  const y3 = Math.sin(endAngle) * sumRadius;
  const x4 = Math.cos(startAngle) * sumRadius;
  const y4 = Math.sin(startAngle) * sumRadius;

  return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} `;
}

export default function Scale() {
  const x = scaleBand()
    .domain(data.map((row) => row.name))
    .range([0, 2 * Math.PI])
    .align(0);
  const y = scaleRadial().domain([0, 1000]).range([innerRadius, outerRadius]);
  const z = scaleSequential()
    .domain([0, 2 * Math.PI])
    .interpolator(interpolateRainbow);

  const newData = data.map((row) => {
    const angle = x(row.name) || 0;
    return {
      startAngle: angle,
      endAngle: angle + x.bandwidth(),
      outerRadius: y(row.value),
      color: z(angle),
    };
  });

  return (
    <div className="scale">
      <h1>scaleRadial (방사형)</h1>
      <div className="description">
        입력 값이 제곱된 출력 값에 선형적으로 대응하도록 범위가 내부적으로
        제곱되는 Linear 스케일의 변형입니다.
      </div>
      <pre>
        const innerRadius = 80;
        <br />
        const outerRadius = 220;
        <br />
        <br />
        const x = scaleBand() .domain(data.map((row) {'=>'} row.name))
        <br />
        .range([0, 2 * Math.PI]); <br />
        <br />
        const y = scaleRadial().domain([0, 1000])
        <br />
        .range([innerRadius, outerRadius]); <br />
        <br />
        const z = scaleSequential() .domain([0, 2 * Math.PI])
        <br />
        .interpolator(interpolateRainbow);
      </pre>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        {newData.map((data, index) => {
          return (
            <polygon
              key={index}
              points={getPoints(
                data.startAngle,
                data.endAngle,
                innerRadius,
                data.outerRadius,
              )}
              transform={transform}
              fill={data.color}
              stroke="#fff"
            />
          );
        })}
      </svg>
    </div>
  );
}
