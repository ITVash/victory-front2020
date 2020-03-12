import { axios } from '../core'

export default {
  addRoute: data => axios.post('routeMap', data),
  cities: () => axios.get('routeMap'),
  show: id => axios.get(`routeMap/${id}`),
  update: (id, data) => axios.put(`routeMap/${id}`, data),
  delete: id => axios.delete(`routeMap/${id}`)
}