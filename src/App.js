import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import { BrowserRouter as Router } from 'react-router-dom'
import MapRoute from './router/MapRoute'
import route from './router/router.config'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MapRoute route={route}></MapRoute>
        </Router>
      </Provider>
    )
  }
}

