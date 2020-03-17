import React from "react"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"

import {
	Home,
	About,
	Cities,
	News,
	Donuzlav,
	Manager,
	City,
	Contacts,
  Support,
} from "./page"
import { Login } from './container'

import { AuthAction } from "./redux/actions"

const App = props => {
	const { access } = props
	window.process = process.env.REACT_APP_PUBLIC_VAPID_KEY
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/cities' component={Cities} />
				<Route exact path='/cities/:id' component={City} />
				<Route exact path='/news' component={News} />
				<Route exact path='/news/:id' render={() => <News view />} />
				<Route exact path='/donuzlav' component={Donuzlav} />
				<Route exact path='/contacts' component={Contacts} />
				<Route
					exact
					path='/manager'
					render={() => (
						!access ? <Login /> : <Manager />
          )}
				/>
				<Route exact path='/support' component={Support} />
			</Switch>
		</div>
	)
}

export default connect(({ Auth }) => ({ access: Auth.items.access }), {
	...AuthAction,
})(App)
