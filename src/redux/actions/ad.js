import { ad } from "../../api"

const actions = {
	isLoading: load => ({
		type: "AD:IS_LOADING",
		payload: load,
	}),
	currentIDA: id => ({
		type: "AD:CURRENTID",
		payload: id,
	}),
	_show: data => ({
		type: "AD:SHOW",
		payload: data,
	}),
	_add: data => ({
		type: "AD:ADD",
		payload: data,
	}),
	_update: data => ({
		type: "AD:UPDATE",
		payload: data,
	}),
	_delete: id => ({
		type: "AD:DELETE",
		payload: id,
	}),
	addAd: dataAd => async dispatch => {
		await dispatch(actions.isLoading(true))
		const data = await ad.addAd(dataAd)
		const obj = await data.data
		try {
			await dispatch(actions._add(obj))
			await dispatch(actions.isLoading(false))
		} catch (err) {
			console.log("err", err)
		}
	},
	showAd: () => async dispatch => {
		//await dispatch(actions.isLoading(true))
		const data = await ad.showAd()
		const obj = await data.data
		try {
			await dispatch(actions._show(obj))
			//await dispatch(actions.isLoading(false))
		} catch (err) {
			console.error(`Ошибка при выходе!`, err)
		}
	},
	updateAd: (id, data) => async dispatch => {
		//debugger
		/*ad.update(id, data)
			.then(({ data }) => {
				dispatch(actions._update(data))
			})
			.catch(err => console.error(`Ошибка загрузки данных!`, err))*/
		//await dispatch(actions.isLoading(true))

		const res = await ad.update(id, data)
		const obj = await res.data
		try {
			await dispatch(actions._update(obj))
		} catch (err) {
			console.error(`Ошибка загрузки данных!`, err)
		}
	},
	deleteAd: id => async dispatch => {
		await dispatch(actions.isLoading(true))
		if (window.confirm("Вы действительно хотите удалить рекламу?")) {
			await ad.delete(id)
			//const obj = await data.data
			try {
				await dispatch(actions._delete(id))
				await dispatch(actions.isLoading(false))
			} catch (err) {
				console.error(`Ошибка при выходе!`, err)
			}
		}
	},
}

export default actions
