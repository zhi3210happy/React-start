import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'

@pureRender
class Counter extends Component {
  constructor (props) {
    super(props)
    this.clickHandle=this.clickHandle.bind(this)
  }
  clickHandle () {
    let { Increment } = this.props
    console.log('增加')
    Increment()
  }
  _Decrement(){
    const {Decrement}=this.props
    console.log('减少')
    Decrement()
  }
  _IncrementAsync=()=>{
   const { IncrementAsync}=this.props
   console.log('延迟一秒增加')
   IncrementAsync()
  }
  _IncrementAsyncOnce(){
    const { IncrementAsyncOnce}=this.props
    console.log('onIncrementAsyncOnce 同时多次触发仅执行最后一次')
    IncrementAsyncOnce()
  }
  _ProxyWeather(payload){
    const {ProxyWeather}=this.props
    console.log('测试代理功能')
    ProxyWeather(payload)
  }
  render () {
    console.log('render count component')
    let { count} = this.props
    return (
      <div>
        <button onClick={this.clickHandle}>
              Increment
        </button>
        {' '}
        <button onClick={this._Decrement.bind(this)}>
              Decrement
        </button>
        {' '}
        <button onClick={this._IncrementAsync}>
              IncrementAsync
        </button>
        {' '}
        <button onClick={::this._IncrementAsyncOnce}>
              IncrementAsyncOnce
        </button>
        <button onClick={()=>this._ProxyWeather(1)}>调用接口测试代理功能</button>
        <hr />
        <div>Clicked: <span style={{fontSize: '20px', color: 'red'}}> {count} </span>times</div>
      </div>
    )
  }
}

export default Counter
