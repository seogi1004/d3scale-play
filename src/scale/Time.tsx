import { MouseEvent, useState } from 'react';
import { scaleTime } from 'd3-scale';

const now = Date.now();
const start = new Date(now - 1000 * 60 * 60); // 1시간 전
const end = new Date(now);

const func = scaleTime().domain([start, end]).range([0, 600]);
const format = (value: number) => `${value < 10 ? '0' + value : value}`;

const axisData = func.ticks().map((date) => {
  return {
    left: func(date),
    text: `${format(date.getHours())}:${format(date.getMinutes())}`,
    date,
  };
});

export default function Scale() {
  const [current, setCurrent] = useState<Date>(end);

  const onMouseMove = (e: MouseEvent) => {
    const offsetX = e.clientX - 36;
    const range = func.range();
    if (offsetX > range[0] && offsetX < range[1]) {
      const date = func.invert(offsetX);
      setCurrent(date);
    }
  };

  return (
    <div className="scale">
      <h1>scaleTime (시간)</h1>
      <div className="description">
        Linear 스케일과 동일하지만 domain 범위를 Date 객체로 정할 수 있습니다.
        앞에서 설명한 ticks 함수를 사용하여 X축을 구현하고, 마우스 오버시
        구해지는 실제 좌표값을 invert 함수로 넘겨서 현재 시간을 구합니다.
      </div>
      <pre>
        const now = Date.now(); <br />
        const start = new Date(now - 1000 * 60 * 60); <br />
        const end = new Date(now); <br />
        const func = scaleTime().domain([start, end]).range([0, 600]);
      </pre>
      <div className="timeline" onMouseMove={onMouseMove}>
        <div className="container">
          {axisData.map((data, index) => {
            return (
              <div className="line" key={index} style={{ left: data.left }} />
            );
          })}
          <div
            className="line"
            style={{ left: func(current), backgroundColor: '#000' }}
          >
            <span>{current.toLocaleTimeString()}</span>
          </div>
        </div>
        {axisData.map((data, index) => {
          return (
            <div className="text" key={index} style={{ left: data.left - 13 }}>
              {data.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
