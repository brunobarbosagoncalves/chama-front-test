import axios from 'axios'

import errorHandler from 'services/errorHandler'

axios.defaults.baseURL = `${process.env.REACT_APP_URL_SEND_STATISTIC}`

axios.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    errorHandler(error, 'statistic-request')
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
    errorHandler(error, 'statistic-response')
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios
