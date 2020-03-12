import { news } from "../../api"

const actions = {
	isLoading: load => ({
		type: "NEWS:IS_LOADING",
		payload: load,
	}),
	_addNews: data => ({
		type: "NEWS:ADD",
		payload: data,
	}),
	_news: data => ({
		type: "NEWS:NEWS",
		payload: data,
	}),
	currentIDN: id => ({
		type: "NEWS:CURRENTID",
		payload: id,
	}),
	_showID: data => ({
		type: "NEWS:SHOWID",
		payload: data,
	}),
	_update: data => ({
		type: "NEWS:UPDATE",
		payload: data,
	}),
	addNews: newsData => dispatch => {
		news.addNews(newsData)			
			.then(({ data }) => {
				dispatch(actions._addNews(data))
			})
			.catch(err => console.log("err", err))
	},
	updateNews: (id, data) => dispatch => {
		news
			.update(id, data)
			.then(({ data }) => {
				dispatch(actions._update(data))
			})
			.catch(err => console.log("err", err))
	},
	news: () => dispatch => {
		news
			.showNews()
			.then(({ data }) => {
				dispatch(actions._news(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
	newsShowID: id => dispatch => {
		news
			.showNewsID(id)
			.then(({ data }) => {
				dispatch(actions._showID(data))
			})
			.catch(err => {
				console.log("err", err)
			})
	},
}

export default actions
