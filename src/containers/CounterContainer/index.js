import React ,{Component} from 'react'

import { connect } from '@/utils'
import Counter from '@/components/Counter'
import CountTimer from '@/components/CountTimer'

@connect
export default class counterContainer extends Component {
  render () {
    const {Increment, Decrement, IncrementAsync, IncrementAsyncOnce, ProxyWeather} = this.props
    const {CtShowRequest} = this.props
    let {counter, countTimer} = this.props
    const {count}=counter
    return (
      <div>
        <Counter {...{Increment, Decrement, IncrementAsync, IncrementAsyncOnce, count, ProxyWeather}} />
        <button onClick={CtShowRequest}>点击显示</button>
        <CountTimer show={countTimer.show} />
      </div>
    )
  }
}


