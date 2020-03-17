import axios from 'axios'

const token = localStorage.token;

token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
axios.defaults.baseURL = 'http://localhost:4000/api/'
//axios.defaults.baseURL = 'https://pobeda75.online/api/'
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.common['Accept'] = 'application/json'
window.axios = axios

export default axios