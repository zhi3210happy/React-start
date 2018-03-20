import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from '@/utils'
@withRouter
@connect
export default class HomeContainer extends Component {
  render () {
    return (
      <div>首页内容 {'>*_*<'} </div>
    )
  }
}

