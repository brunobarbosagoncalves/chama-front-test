import axios from 'axios'

axios.defaults.baseURL = `${process.env.REACT_APP_URL_SEND_ERROR}`

axios.interceptors.request.use(
  async (config) => config,
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Do something with response error
    return false
    // return Promise.reject(error)
  }
)

export default axios
