import { scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';

const func = scaleSequential()
  .domain([0, 100])
  .interpolator(interpolateRainbow);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleSequential (연속)</h1>
      <div className="colors">
        {Array(100)
          .fill(0)
          .map((val, i) => (
            <div
              className="color"
              key={i}
              style={{ backgroundColor: func(i) }}
            />
          ))}
      </div>
    </div>
  );
}
