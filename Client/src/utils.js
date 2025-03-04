import axios from 'axios'

export const signupAxios = axios.create({
  baseURL: 'http://localhost:3002/api/v1/auth',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export const loginAxios = axios.create({
  baseURL: 'http://localhost:3002/api/v1/auth',
})

export const refreshTokenAxios = axios.create({
  baseURL: 'http://localhost:3002/api/v1/auth',
  withCredentials: true,
})
