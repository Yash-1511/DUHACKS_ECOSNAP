import axios from 'axios'

const baseURL = "http://localhost:8000/api/"

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
