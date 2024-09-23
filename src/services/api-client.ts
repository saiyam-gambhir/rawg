import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5a998c5e04e34b15a2b02979f2a6020a'
  }
})
