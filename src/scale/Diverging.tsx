import { scaleDiverging } from 'd3-scale';
import { interpolateRdBu } from 'd3-scale-chromatic';

const func = scaleDiverging<string>()
  .domain([-50, 0, 50])
  .interpolator(interpolateRdBu);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleDiverging (양방향)</h1>
      <div className="description">
        양방향 스케일은 양수와 음수, 위쪽과 아래쪽의 두가지 반대 방향으로
        진행되는 현상을 시각화하는데 도움이 됩니다.
      </div>
      <pre>
        import {'{ interpolateRdBu }'} from 'd3-scale-chromatic';
        <br />
        <br />
        const func = scaleDiverging{'<'}string{'>'}() .domain([-50, 0, 50])
        <br />
        .interpolator(interpolateRdBu);
      </pre>
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
