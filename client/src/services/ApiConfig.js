import axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://blue-team-blog-app.herokuapp.com/api',
  development: 'http://localhost:3001/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api
