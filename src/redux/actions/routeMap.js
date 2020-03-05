import { routeMap } from "../../api"

const actions = {
	isLoading: load => ({
		type: "ROUTE:IS_LOADING",
		payload: load,
	}),
	_addRoute: data => ({
		type: "ROUTE:ADD",
		payload: data,
	}),
	_cities: data => ({
		type: "ROUTE:CITIES",
		payload: data,
	}),
	currentID: id => ({
		type: "ROUTE:CURRENTID",
		payload: id,
	}),
	_showID: data => ({
		type: "ROUTE:SHOWID",
		payload: data,
	}),
	addRoute: route => dispatch => {
		routeMap
			.addRoute(route)
			.then(({ data }) => {
				dispatch(actions._addRoute(data.data))
				console.log("data", data)
			})
			.catch(err => console.log("err", err))
	},
	cities: () => dispatch => {
		routeMap
			.cities()
			.then(({ data }) => {
				dispatch(actions._cities(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
	showID: id => dispatch => {
		routeMap
			.show(id)
			.then(({ data }) => {
				dispatch(actions._showID(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
}

export default actions
