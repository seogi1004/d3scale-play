import { scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';

export default function Scale() {
  const func3 = scaleSequential()
    .domain([0, 100])
    .interpolator(interpolateRainbow);

  return (
    <div className="scale">
      <h1>scaleSequential</h1>
      <h2>
        {func3(0)}, {func3(50)}, {func3(100)}
      </h2>
    </div>
  );
}
