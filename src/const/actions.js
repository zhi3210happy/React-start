import { createAction } from 'easy-action'
import {proxyWeather} from '@/server'
const Increment = createAction('INCREMENT') // 增加
const Decrement = createAction('DECREMENT') // 减少
const IncrementIfOdd = createAction('INCREMENT_IF_ODD')
const IncrementAsync =createAction('INCREMENT_ASYNC')
const IncrementAsyncOnce =createAction('INCREMENT_ASYNC_ONCE')
const _ProxyWeather=createAction('GET_WEATHER_PROXY')

//异步例子
const ProxyWeather=(payload={})=>async(dispatch,getState)=>{
  const res= await proxyWeather(payload)
  console.log(res)
  dispatch(_ProxyWeather)
}

export default{
  Increment,
  IncrementIfOdd ,
  Decrement,
  IncrementAsync ,
  IncrementAsyncOnce,
  ProxyWeather
}