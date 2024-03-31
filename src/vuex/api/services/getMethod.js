import axios from 'axios'

export default {
  getAll (url, data) {
    return axios.get(url, data)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
