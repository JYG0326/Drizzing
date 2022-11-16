/** @jsxImportSource @emotion/react */
import './App.css';
import './emotion.js';
import * as S from './emotion.js';

function App() {
  return (
    <div className="App">
      <div css={S.MainPage}>
        <div css={S.sidebar_right}>
          <div css={S.nowarea}>
            <p css={S.areaname}>현재 지역: %nowArea%</p>
          </div>
          <div css={S.forecast}>
            <div css={S.wrapper_f}>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_f}>
                <p css={S.timeline}>0000.00.00 0:00</p>
                <p>날씨: </p>
                <p>습도: 0%</p>
                <p>온도: 0°C</p>
                <p>풍속: 0m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
            </div>
            <div css={S.wrapper_d}>
              <div css={S.detailbox}>
                <h1>날씨 상세 정보</h1>
              </div>
            </div>
          </div>
        </div>
        <div css={S.weatherInf}>
          <div css={S.weatherIcon}></div>
          <div css={S.nowTime}><p>오전 0:00</p></div>
          <div css={S.weatherBox}>
            <h1 css={S.nowWeather}>맑음 / 0°C</h1>
            <p css={S.weatherState}>오늘은 화창해요.</p>
          </div>
          <div css={S.tipArea}>
            <div css={S.tipBox}><p>wether_tip_1</p></div>
            <div css={S.tipBox}><p>wether_tip_2</p></div>
            <div css={S.tipBox}><p>wether_tip_3</p></div>
            <div css={S.tipBox}><p>wether_tip_4</p></div>
          </div>
        </div>
        <div>
          <img css={S.sideicon} alt='sidemenubar' src='/sidemenubar.png' />
        </div>
      </div>
    </div>
  );
}

export default App;