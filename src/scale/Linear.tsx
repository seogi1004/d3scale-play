import type { MouseEvent } from 'react';
import type { Pair } from '../types';
import { useState } from 'react';
import { scaleLinear } from 'd3-scale';

function tempScaleLinear(domain: Pair, range: Pair) {
  const a = domain[1] - domain[0];
  const b = range[1] - range[0];
  return function (x: number) {
    return (b / a) * x;
  };
}

export default function Scale() {
  const DOMAIN: Pair = [0, 10];
  const RANGE: Pair = [0, 80];

  const chartData = [2, 5, 6, 15];
  const chartWidth = 100;

  const func1 = scaleLinear().domain(DOMAIN).range(RANGE);
  const func2 = scaleLinear().domain(DOMAIN).range(RANGE);
  func2.clamp(true);

  const [current, setCurrent] = useState<number>(0);

  const onMouseMove = (e: MouseEvent) => {
    const offsetY = e.nativeEvent.offsetY;
    const value = func2.invert(offsetY);
    setCurrent(value);
  };

  return (
    <div className="scale">
      <h1>scaleLinear</h1>

      <div className="description">
        가장 보편적으로 사용하는 스케일이며, 다른 스케일과 마찬가지로
        domain(정의역)과 range(치역)만 기억하면 됩니다. domain은 입력 값,
        range는 입력 값에 대응하는 출력 값입니다. invert는 반대로 출력 값을 입력
        값으로 넣으면 원래의 입력 값을 반환하는 역함수입니다.
      </div>
      <div className="formula">y = mx + b</div>

      <pre>
        const func = scaleLinear().domain([0, 10]).range([0, 80]); <br />
        func(2); // return 16;
        <br />
        func(5); // return 40;
        <br />
        func(6); // return 48
        <br />
        func(15); // return 120
      </pre>

      <div className="column-list">
        {chartData.map((value, index) => {
          return (
            <div
              className="column"
              key={index}
              style={{
                backgroundColor: 'gray',
                width: chartWidth,
                height: func1(value),
                left: index * chartWidth,
              }}
            />
          );
        })}
      </div>

      <h3>clamp(true)</h3>
      <div className="column-list">
        {chartData.map((value, index) => {
          return (
            <div
              className="column"
              key={index}
              style={{
                backgroundColor: 'gray',
                width: chartWidth,
                height: func2(value),
                left: index * chartWidth,
              }}
            />
          );
        })}
      </div>
      <h3>ticks(3)</h3>
      <div className="column-list">
        {func2.ticks(3).map((value, index) => {
          return (
            <div
              className="tick"
              key={index}
              style={{
                top: func2(value) + 2,
              }}
            >
              {value}
            </div>
          );
        })}
        {chartData.map((value, index) => {
          return (
            <div
              className="column"
              key={index}
              style={{
                backgroundColor: 'gray',
                width: chartWidth,
                height: func2(value),
                left: index * chartWidth,
              }}
            />
          );
        })}
      </div>
      <h3>invert</h3>
      <div className="column-list" onMouseMove={onMouseMove}>
        <div
          className="tick"
          style={{
            top: func2(current) + 2,
          }}
        >
          {current.toFixed(0)}
        </div>
        {chartData.map((value, index) => {
          return (
            <div
              className="column"
              key={index}
              style={{
                backgroundColor: 'gray',
                width: chartWidth,
                height: func2(value),
                left: index * chartWidth,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
