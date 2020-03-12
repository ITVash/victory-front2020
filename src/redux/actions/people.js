import { people } from "../../api"

const actions = {
	isLoading: load => ({
		type: "PEOPLE:IS_LOADING",
		payload: load,
	}),
	_addPeople: data => ({
		type: "PEOPLE:ADD",
		payload: data,
	}),
	_people: data => ({
		type: "PEOPLE:PEOPLE",
		payload: data,
	}),
	currentIDP: id => ({
		type: "PEOPLE:CURRENTID",
		payload: id,
	}),
	_showID: data => ({
		type: "PEOPLE:SHOWID",
		payload: data,
	}),
	_update: data => ({
		type: "PEOPLE:UPDATE",
		payload: data,
	}),
	addPeople: peopleData => dispatch => {
		people.addPeople(peopleData)			
			.then(({ data }) => {
				dispatch(actions._addPeople(data))
				console.log("data", data)
			})
			.catch(err => console.log("err", err))
	},
	updatePeople: (id, data) => dispatch => {
		people
			.update(id, data)
			.then(({ data }) => {
				dispatch(actions._update(data))
			})
			.catch(err => console.log("err", err))
	},
	people: () => dispatch => {
		people
			.showPeople()
			.then(({ data }) => {
				dispatch(actions._people(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
	peopleShowID: id => dispatch => {
		people
			.showPeopleID(id)
			.then(({ data }) => {
				dispatch(actions._showID(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
}

export default actions
