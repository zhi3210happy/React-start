import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from '@/utils'
import App from '@/components/App'

@withRouter
@connect
export default class AppContainer extends Component {
  render () {
    const {children} = this.props
    return (
      <App children={children} />
    )
  }
}

