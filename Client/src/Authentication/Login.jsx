import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../apis/authApis'
import UserContext from '../context/UserContext'
import style from './Login.module.css'

function Login() {
  const { loginInfo, setloginInfo } = useContext(UserContext)
  const [userInfo, setuserInfo] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleUserInfo(e) {
    const { name, value } = e.target
    setuserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  async function handleLogin(e) {
    e.preventDefault()
    const response = await login(userInfo)
    setuserInfo({
      username: '',
      email: '',
      password: '',
    })

    setloginInfo({
      accessToken: response?.data?.accessToken,
      expiresAt: response?.data?.expiresAt,
      userInfo: response?.data?.userInfo,
      message: response?.message,
      success: response?.success,
    })
  }

  console.log('LOGGING LOGIN RESPONSE: ', loginInfo)
  return (
    <div id={style.loginContainer}>
      <div id={style.formContainer}>
        <div id={style.header}>
          <h1>Welcome Back!</h1>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUserInfo}
            value={userInfo.username}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleUserInfo}
            value={userInfo.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleUserInfo}
            value={userInfo.password}
          />

          <button>Login</button>
        </form>

        <p>
          Dont have an account?{' '}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Login
