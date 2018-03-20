import { createAction } from 'easy-action'
const Increment = createAction('INCREMENT') // 增加
const Decrement = createAction('DECREMENT') // 减少
const IncrementIfOdd = createAction('INCREMENT_IF_ODD')
const IncrementAsync =createAction('INCREMENT_ASYNC')
const IncrementAsyncOnce =createAction('INCREMENT_ASYNC_ONCE')
const ProxyWeather=createAction('GET_WEATHER_PROXY')



export default{
  Increment,
  IncrementIfOdd ,
  Decrement,
  IncrementAsync ,
  IncrementAsyncOnce,
  ProxyWeather
}