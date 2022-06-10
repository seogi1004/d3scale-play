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
      <h1>scaleTime</h1>
      <div className="timeline">
        <div className="container" onMouseMove={onMouseMove}>
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
