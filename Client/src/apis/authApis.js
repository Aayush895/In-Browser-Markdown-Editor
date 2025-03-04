import { signupAxios, loginAxios, refreshTokenAxios } from '../utils'

export async function signup(userData) {
  if (
    !userData.username ||
    !userData.email ||
    !userData.password ||
    !userData.profilePic
  ) {
    throw new Error('Please provide user data')
  }

  const formData = new FormData()
  formData.append('username', userData.username)
  formData.append('email', userData.email)
  formData.append('password', userData.password)
  formData.append('profilePic', userData.profilePic)

  const response = await signupAxios.post('/signup', formData)

  if (!response.data) {
    throw new Error('Invalid response from the server during signup')
  }

  return response.data
}

export async function login(userData) {
  if (!userData.username || !userData.email || !userData.password) {
    throw new Error('Please provide user data for login!')
  }

  const response = await loginAxios.post('/login', userData)

  if (!response.data) {
    throw new Error('Invalid response from server during login')
  }

  return response.data
}

export async function refreshTokens() {}
