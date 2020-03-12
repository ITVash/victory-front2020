import { axios } from '../core'

export default {
  addNews: data => axios.post('news', data),
  showNews: () => axios.get('news'),
  showNewsID: id => axios.get(`news/${id}`),
  update: (id, data) => axios.put(`news/${id}`, data),
  delete: id => axios.delete(`news/${id}`)
}