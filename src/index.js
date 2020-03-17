import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'

import "./index.scss"
import "antd/dist/antd.css"

import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { subscribeUser } from './subscribe'

import store from './redux/store'
import { AuthAction } from './redux/actions'
window.store = store

const token = localStorage.getItem('token')
if (token) {
  const dec = jwtDecode(token)
  if (dec.exp * 1000 > Date.now()) {
    store.dispatch(AuthAction.getMe())
  } else {
    //localStorage.removeItem('token')
    store.dispatch(AuthAction.logout())
  }
}

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById("root"))

serviceWorker.register()
subscribeUser()