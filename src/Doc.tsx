import React from 'react';
import './App.css';

export default function Scale() {
  return (
    <div className="doc">
      <h1>개요</h1>
      <div className="description">
        D3 스케일은 시각화의 기본 작업을 위한 편리한 추상화 모델입니다. 추상
        데이터의 차원을 시각적 표현에 매핑합니다. 산점도에서 점 단위를 픽셀
        단위로 측정 값을 미터 단위로 매핑하는 것과 같이 정량적 데이터를 위치
        인코딩하는 데 가장 많이 사용되지만 스케일은 색상, 선 폭 또는 심볼 크기와
        같은 거의 모든 시각적 인코딩을 나타낼 수 있습니다. 스케일은 정의된
        범주형 데이터 또는 구분이 필요한 개별 데이터와 같은 거의 모든 유형의
        데이터와 함께 사용할 수도 있습니다.
      </div>
    </div>
  );
}
