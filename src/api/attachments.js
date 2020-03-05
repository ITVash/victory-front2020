import { axios } from '../core'

export default {
  add: data => axios.post('attachments', data)
}