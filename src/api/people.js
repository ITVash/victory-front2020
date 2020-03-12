import { axios } from '../core'

export default {
  addPeople: data => axios.post('people', data),
  showPeople: () => axios.get('people'),
  showPeopleID: id => axios.get(`people/${id}`),
  update: (id, data) => axios.put(`people/${id}`, data),
  delete: id => axios.delete(`people/${id}`)
}