import { axios } from '../core'

export default {
  getMe: () => axios.get('getMe'),
  login: data => axios.post('login', data)
}