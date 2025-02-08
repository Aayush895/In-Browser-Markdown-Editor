import { Link } from 'react-router-dom'
import style from './Login.module.css'

function Login() {
  return (
    <div id={style.loginContainer}>
      <div id={style.formContainer}>
        <div id={style.header}>
          <h1>Welcome Back!</h1>
          <p>Login to your account</p>
        </div>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

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
