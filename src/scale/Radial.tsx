import { scaleRadial, scaleBand } from 'd3-scale';

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
  const y = scaleRadial().domain([innerRadius, outerRadius]).range([0, 1000]);

  return (
    <div className="scale">
      <h1>scaleSequential</h1>
      <h2></h2>
    </div>
  );
}
