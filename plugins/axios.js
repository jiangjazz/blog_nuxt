import Vue from 'vue'
import * as axios from 'axios'

let token = 'token'

axios.defaults.baseURL = process.env.baseURL
axios.defaults.headers.common['Authorization'] = token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$http = axios
