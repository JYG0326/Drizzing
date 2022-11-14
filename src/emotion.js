/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const MainPage = css`
  width: 100%;
  height: 100vh;
  background-image: url("/weather_rain.jpg");
`

export const sidebar_right = css`
  float: right;
  min-width: 400px;
  width:22.5%;
  height: 100vh;
  background-color: rgba(0,0,0,0.66);
`
export const nowarea = css`
  width: 100%;
  height: 150px;
  border-bottom: 5px solid #ffffff;
`
export const areaname = css`
  width: 100%;
  height: 150px;
  color: white;
  font-weight: bold;
  font-size: 26px;
  word-spacing: -5px;
  text-align: center;
  line-height: 150px;
`
export const timelist = css`
  width: 100%;
  height: calc(100vh - 230px);
  margin: 40px 0px 40px 0px;
`
export const wrapper_t = css`
  width: 100%;
  height: calc(100vh - 230px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const listbox_t = css`
  display: grid;
  grid-template-columns: 110px 110px 70px;
  grid-template-rows: 25px 22.5px 22.5px;
  width: 330px;
  height: 100px;
  padding: 15px 20px 15px 20px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.2);
  color: white;
  font-size: 19px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  text-align: left;
`

export const timeline = css`
  grid-column: span 2;
`

export const magnify = css`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`
