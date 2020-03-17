import { axios } from "../core"

export default {
	addAd: data => axios.post("ads", data),
	showAd: () => axios.get("ads"),
	update: (id, data) => axios.put(`ads/${id}`, data),
	delete: id => axios.delete(`ads/${id}`),
}
