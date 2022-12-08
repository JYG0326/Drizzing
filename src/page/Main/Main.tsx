/** @jsxImportSource @emotion/react */
import './main_css';
import * as S from './main_css';
import { useState } from 'react';
  
function Main() {

  const [modal, setModal] = useState(false);
  
  const [timer, setTimer] = useState("00:00");
  const getTime = () => {
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${Hours}:${Minutes}`);
  }
  const startTimer = () => {
    setInterval(getTime, 1000)
  }
  startTimer();

  const [date, setDate] = useState("0000.00.00 00:00");
  const getDate = () => {
    const date = new Date();
    const Year = String(date.getFullYear());
    const Month = String(date.getMonth());
    const Days = String(date.getDate());
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    setDate(`${Year}.${Month}.${Days} ${Hours}:${Minutes}`);
  }
  const startTimer2 = () => {
    setInterval(getDate, 1000)
  }
  startTimer2();

  return (
    <div>
      <div css={S.MainPage}>
        <div css={S.sidebar_right}>
          <div css={S.nowarea}>
            <p css={S.areaname}>현재 지역: 광주광역시</p>
          </div>
          <div css={S.forecast}>
            <div css={S.wrapper_f}>
              <div css={S.listbox_f}>
                <p css={S.timeline}>2022.10.30 9:00</p>
                <p>날씨: 흐림</p>
                <p>습도: 46%</p>
                <p>온도: 0°C</p>
                <p>풍속: 4m/s</p>
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
          <div css={S.nowTime}><p>{timer}</p></div>
          <div css={S.weatherBox}>
            <h1 css={S.nowWeather}>흐림 / -1°C</h1>
            <p css={S.weatherState}>오늘은 많이 쌀쌀해요.</p>
          </div>
          <div css={S.tipArea}>
            <div css={S.tipBox}><p>오늘은 옷을 두텁게 입고 나가세요.</p></div>
            <div css={S.tipBox}><p>동파 방지를 위해 자주 수도를 틀어두세요.</p></div>
            <div css={S.tipBox}><p>따뜻한 물과 음식을 자주 마시는 걸 권장해요.</p></div>
            <div css={S.tipBox}><p>감기에 걸리지 않도록 주의하세요.</p></div>
          </div>
        </div>
        <div>
          <img css={S.sideicon} alt='sidemenubar' src='/sidemenubar.png' onClick={() => setModal(true)} />
        </div>
        {
      	  modal === true ? <Modal/> : null  //기계역할
        }
      </div>
    </div>
  );
  
  function Modal(){
    return(
      <div className='modal' css={S.sidebar_left}>
        <h1 css={S.titletext}>Project: 이슬비</h1>
        <img alt='iconx' src='/icon_x.png' onClick={() => setModal(false)} css={S.icon} />
        <p css={S.AM}>지역 변경 / 추가</p>
        <div css={S.area}>
          <p css={S.text1}>광주광역시 광산구</p>
          <p css={S.text2}>흐림</p>
          <p css={S.text3}>-1°C</p>
        </div>
      </div>
    )
  }
  
}


export default Main;