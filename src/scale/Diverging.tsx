import { scaleDiverging } from 'd3-scale';
import { interpolateRdBu } from 'd3-scale-chromatic';

export default function Scale() {
  const func = scaleDiverging((t) => interpolateRdBu(t)).domain([-50, 0, 50]);

  return (
    <div className="scale">
      <h1>scaleDiverging</h1>
      <div className="colors">
        {Array(101)
          .fill(0)
          .map((val, i) => (
            <div
              className="color"
              key={i}
              style={{ backgroundColor: func(i - 50) }}
            />
          ))}
      </div>
    </div>
  );
}
