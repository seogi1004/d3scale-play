import {
  scaleSequential,
  scaleSequentialLog,
  scaleSequentialSymlog,
  scaleSequentialPow,
  scaleSequentialSqrt,
  scaleSequentialQuantile,
} from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';

const func = scaleSequential()
  .domain([0, 100])
  .interpolator(interpolateRainbow);

export default function Scale() {
  return (
    <div className="scale">
      <h1>scaleSequential (연속)</h1>
      <div className="description">
        보간기(Interpolator) 함수로 정의된 연속된 값에 매핑합니다. 고유한 보간기
        기능을 정의하거나 내장된 D3 보간기 기능을 사용할 수 있습니다. 일반적으로
        숫자값의 연속 간격을 일련의 색상으로 매핑하는데 유용합니다.
      </div>
      <div className="tip">
        scaleSequential 함수는 선형적으로 매핑하는데, 앞에서 설명한 다른 스케일
        방식으로 매핑하는 함수도 제공됩니다.(scaleSequentialLog,
        scaleSequentialSymlog, scaleSequentialPow, scaleSequentialSqrt,
        scaleSequentialQuantile)
      </div>
      <pre>
        import {'{ interpolateRainbow }'} from 'd3-scale-chromatic';
        <br />
        <br />
        const func = scaleSequential() .domain([0, 100])
        <br />
        .interpolator(interpolateRainbow);
      </pre>
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
