import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from '@/utils'

@withRouter
@connect
export default class NoMatchContainer extends Component {
  render () {
    return (
      <div>404!Not Found</div>
    )
  }
}

