/** @jsxImportSource @emotion/react */
import './style';
import axios from 'axios';
import * as S from './style';
import { useState, useEffect, ReactNode } from 'react';

export default function Main() {
  //API_KEY
  const API_KEY = process.env.REACT_APP_API;
  console.log(API_KEY);


  //현재 시간
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


  //날씨 조회
  interface DataForm {
    [x: string]: any;
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      [x: string]: ReactNode;
      description: string;
    }[];
  }
  const [nowWeather, setNowWeather] = useState<DataForm | null>(null);
  const [weatherData, setWeatherData] = useState<DataForm | null>(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response_main = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric&lang=kr`);
        setNowWeather(response_main.data);
        const response_sub = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${API_KEY}&units=metric&lang=kr`);
        setWeatherData(response_sub.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  const searchWeather = async (e: {
    keyCode: any; key: string;
  }) => {
    if (e.key === 'Enter') {
      try {
        const search_main = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=kr`);
        setNowWeather(search_main.data);
        const search_sub = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric&lang=kr`);
        setWeatherData(search_sub.data.list);
      } catch (error) {
        alert('존재하지 않거나, 올바르지 않은 지역입니다.')
      }
    }
  }

  if (!weatherData ||!nowWeather) {
    return <div></div>;
  }


  //데이터 필터링&변환
  function getDayName(day: number): string {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[day];
  }
  function formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month} / ${day}`;
  }
  function formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div>
      <div css={S.MainPage}>
        <div css={S.weatherInf}>
          <div css={S.weatherIcon}></div><div css={S.nowTime}><p>{timer}</p></div><div css={S.weatherBox}>
            <h1 css={S.nowWeather}>{nowWeather.name} / {nowWeather.main.temp}°C</h1>
            <p css={S.weatherState}>Today weather is {nowWeather.weather[0].main}</p>
          </div><div css={S.tipArea}>
            <div css={S.tipBox}><p></p></div>
            <div css={S.tipBox}><p></p></div>
            <div css={S.tipBox}><p></p></div>
            <div css={S.tipBox}><p></p></div>
          </div>
        </div>
        <div css={S.sidebar_right}>
          <div css={S.nowarea}>
            <p css={S.areaname}><input css={S.AM} placeholder='도시를 입력해주세요.' onChange={(e) => setLocation(e.target.value)} onKeyDown={searchWeather} type='text' /></p>
          </div>
          <div css={S.forecast}>
            <div css={S.wrapper_f}>
              {weatherData.map((data: any) => (
                <div css={S.listbox_f} key={data.dt}>
                  <p>{formatDate(new Date(data.dt*1000))} ({getDayName(new Date(data.dt * 1000).getDay())}) {formatTime(new Date(data.dt*1000))}</p>
                  <p>날씨: {data.weather[0].description}</p>
                  <p>기온: {data.main.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}