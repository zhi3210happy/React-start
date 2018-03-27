import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { AppContainer } from 'react-hot-loader'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//移动端reset css，可以自行替换
// import '@/assets/reset-mobile'   
import reducer from '@/reducers'
import routers from '@/routers'


const store = createStore(
  reducer,
  applyMiddleware(thunk,process.env.NODE_ENV.indexOf('dev')>-1?logger:'')
)
const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Provider store={store}>{Component}</Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(routers)

// 热替换代码
if (module.hot) {
  module.hot.accept('./routers', () => {
    const nextRoutes = require('./routers').default
    render(nextRoutes)
  })
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}
