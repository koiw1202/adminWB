import { services } from './api'

export const api = (httpMethod, url, data) => {
  console.log(services)

  switch (httpMethod) {
    case 'GET':
      return services.get.getAll(url, data)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })

    case 'POST':
      return services.post.postAll(url, data)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error)
        })
  }
  // API request
}
