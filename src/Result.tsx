import React from 'react';
import './App.css';

export default function Scale() {
  return (
    <div className="doc">
      <h1>결론</h1>
      <div className="description">
        제니퍼5 안에는 한정된 스케일 종류로 구현된 차트와 컴포넌트 등이
        존재합니다. 다만 그때그때 상황에 맞게 구현했으며, 어떤 스케일이다라고
        정의하지 않았을 뿐입니다. 그동안 모니터링 스터디 준비를 하면서 몇가지
        모니터링 제품을 살펴보았는데, 분위수나 로그 스케일 등을 사용하는 것을
        목격한 적이 있습니다. 그동안 데이터를 표현하는데, 데이터를 왜곡하면
        안된다는 이유로 여러가지 시도를 해보지 못한 것에 대해 아쉬움이
        있었습니다. D3 스케일을 살펴보고, 이해하는 과정에서 데이터 시각화에 대한
        본질적인 목적, 이유에 대한 고찰을 하게 되었습니다.
      </div>
    </div>
  );
}
