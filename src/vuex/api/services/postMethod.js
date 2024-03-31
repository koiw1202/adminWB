import axios from 'axios'

export default {
  postAll (url, data) {
    return axios.post(url, data)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
