import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as API from '@/server'

export function * incrementAsync () {
  console.log('onIncrementAsync 延时1秒增加')
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
  let Promise = yield API.getSceneInfo(123)
  console.log(Promise)
}

function * watchIncrementAsyncSaga () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function * watchIncrementAsyncOnceSaga () {
  console.log('onIncrementAsyncOnce 同时多次触发仅执行最后一次')
  yield takeLatest('INCREMENT_ASYNC_ONCE', incrementAsync)
}

function * helloSaga () {
  console.log('hello saga')
}

function * setCountTimerShowRequest () {
  yield put({
    type: 'CT_SHOW'
  })
  yield delay(5000)
  yield put({
    type: 'CT_HIDE'
  })
}

function * setCountTimerShowRequestSaga () {
  yield takeLatest('CT_SHOW_REQUEST', setCountTimerShowRequest)
}

function * getProxyWeather () {
  let Promise = yield API.proxyWeather(1)
  console.log(Promise)
}

function * getProxyWeatherSaga () {
  yield takeLatest('GET_WEATHER_PROXY', getProxyWeather)
}

export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsyncSaga(),
    watchIncrementAsyncOnceSaga(),
    setCountTimerShowRequestSaga(),
    getProxyWeatherSaga()
  ])
}
