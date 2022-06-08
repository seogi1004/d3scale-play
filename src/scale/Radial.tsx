import { scaleRadial, scaleBand } from 'd3-scale';
import type { Pair } from '../types';

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const width = 460 - margin.left - margin.right;
const height = 460 - margin.top - margin.bottom;
const innerRadius = 80;
const outerRadius = Math.min(width, height) / 2;
const data = Array(50)
  .fill({
    name: '',
    value: 0,
  })
  .map((row, index) => {
    return {
      name: `name_${index}`,
      value: Math.floor(Math.random() * 500) + 100,
    };
  });

export default function Scale() {
  const x = scaleBand()
    .range([0, 2 * Math.PI])
    .align(0)
    .domain(data.map((row) => row.name));
  const y = scaleRadial().range([innerRadius, outerRadius]).domain([0, 1000]);

  const newData = data.map((row) => {
    const angle = x(row.name) || 0;

    return {
      startAngle: angle,
      endAngle: angle + x.bandwidth(),
      outerRadius: y(row.value),
    };
  });

  console.log(newData[0]);

  const outerRadius2 = innerRadius + newData[0].outerRadius;
  const x1 = Math.cos(newData[0].startAngle) * innerRadius;
  const y1 = Math.sin(newData[0].startAngle) * innerRadius;
  const x2 = Math.cos(newData[0].endAngle) * innerRadius;
  const y2 = Math.sin(newData[0].endAngle) * innerRadius;
  const x3 = Math.cos(newData[0].endAngle) * outerRadius2;
  const y3 = Math.sin(newData[0].endAngle) * outerRadius2;
  const x4 = Math.cos(newData[0].startAngle) * outerRadius2;
  const y4 = Math.sin(newData[0].startAngle) * outerRadius2;

  const points = `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} `;

  return (
    <div className="scale">
      <h1>scaleRadial</h1>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <polygon points={points} />
      </svg>
    </div>
  );
}
