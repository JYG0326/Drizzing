/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const MainPage = css`
  width: 100%;
  height: 100vh;
  background-image: url("/cloud.png");
  background-repeat: no-repeat;
  background-size: cover;
`

export const sideicon = css`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 5;
`

export const weatherInf = css`
  width: calc(100% - 375px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const weatherIcon = css`
  width: 250px;
  height: 250px;
  border-radius: 250px;
  background-color: rgba(255, 255, 255, 0.4);
  color: black;
  font-weight: bold;
`
export const nowTime = css`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`
export const weatherBox= css`
  width: auto;
  height: 100px;
`
export const nowWeather = css`
  font-size: 35px;
`

export const weatherState = css`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const tipArea = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 280px;
`

export const tipBox = css`
  width: 400px;
  height: 40px;
  padding: 0px 20px 0px 20px;
  border-radius: 40px;
  font-size: 17.5px;
  line-height: 40px;
  text-align: left;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
`



export const sidebar_right = css`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 375px;
  height: 100vh;
  background-color: rgba(0,0,0,0.66);
`
export const nowarea = css`
  width: 100%;
  height: 100px;
  border-top: 5px solid #ffffff;
  border-bottom: 5px solid #ffffff;
  margin: 40px 0px 40px 0px;
`
export const areaname = css`
  width: 100%;
  height: 100px;
  color: white;
  font-weight: bold;
  font-size: 26px;
  word-spacing: -5px;
  text-align: center;
  line-height: 100px;
`
export const forecast = css`
  position: relative;
  width: 100%;
  height: calc(100vh - 220px);
  margin: 40px 0px 40px 0px;
`
export const wrapper_f = css`
  width: 100%;
  height: calc(100vh - 220px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const listbox_f = css`
  display: grid;
  grid-template-rows: 25px 22.5px 22.5px;
  width: 330px;
  height: 100px;
  padding: 15px 20px 15px 20px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.2);
  color: white;
  font-size: 19px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  text-align: left;
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

export const wrapper_d = css`
  width: 100%;
  height: calc(100vh - 230px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`

export const detailbox = css`
  width: 330px;
  height: calc(100vh - 230px);
  border-radius: 20px;
  background-color: rgba(255,255,255,0.2);
`

export const AM = css`
  position: absolute;
  color: white;
  background-color: rgba(0,0,0, 0);
  text-align: center;
  font-size: 25px;
  border: none;
  outline: none;
  padding: 5px;
  top: 75px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-weight: bold;
`
