import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'

@pureRender
class Counter extends Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle () {
    let { Increment } = this.props
    console.log('没毛病')
    Increment()
  }
  render () {
    console.log('render count component')
    let { count, Decrement, IncrementAsync, IncrementAsyncOnce, ProxyWeather } = this.props
    return (
      <div>
        <button onClick={this.clickHandle}>
              Increment
        </button>
        {' '}
        <button onClick={Decrement}>
              Decrement
        </button>
        {' '}
        <button onClick={IncrementAsync}>
              IncrementAsync
        </button>
        {' '}
        <button onClick={IncrementAsyncOnce}>
              IncrementAsyncOnce
        </button>
        <button onClick={()=>ProxyWeather({id:1})}>调用接口测试代理功能</button>
        <hr />
        <div>Clicked: <span style={{fontSize: '20px', color: 'red'}}> {count} </span>times</div>
      </div>
    )
  }
}

export default Counter
