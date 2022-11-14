/** @jsxImportSource @emotion/react */
import './App.css';
import './emotion.js';
import * as S from './emotion.js';

function App() {
  return (
    <div className="App">
      <div css={S.MainPage}>
        <div className='menubar'>

        </div>
        <div className='sidebar_left'>

        </div>
        <div css={S.sidebar_right}>
          <div css={S.nowarea}>
            <p css={S.areaname}>현재 지역: 광주광역시 광산구</p>
          </div>
          <div css={S.timelist}>
            <div css={S.wrapper_t}>
              <div css={S.listbox_t}>
                <p css={S.timeline}>2022.11.01 6:00</p>
                <p>날씨: 비</p>
                <p>습도: 40%</p>
                <p>온도: 15°C</p>
                <p>풍속: 15m/s</p>
                <div css={S.magnify}><img alt='magnify' src='/magnifying.png' /></div>
              </div>
              <div css={S.listbox_t}></div>
              <div css={S.listbox_t}></div>
              <div css={S.listbox_t}></div>
              <div css={S.listbox_t}></div>
              <div css={S.listbox_t}></div>
            </div>
          </div>
          <div>
            <h1>날씨 상세 정보</h1>
          </div>
        </div>
        <div className='weatherInf'>

        </div>
      </div>
    </div>
  );
}

export default App;
