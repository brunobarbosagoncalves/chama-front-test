import axios from 'axios'

import errorHandler from 'services/errorHandler'

axios.defaults.baseURL = 'https://api.github.com'

axios.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    errorHandler(error, 'github-request')
    // I cand handle a request with errors here
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    errorHandler(error, 'github-response')
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios
