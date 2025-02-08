import { Link } from 'react-router-dom'
import style from './Signup.module.css'

function SignUp() {
  return (
    <div id={style.signupContainer}>
      <div id={style.formContainer}>
        <div id={style.header}>
          <h1>Welcome to MarkDown</h1>
          <p>Create your account</p>
        </div>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <label htmlFor="profilePic">Upload your profile picture</label>
          <input type="file" name="profilePic" id={style.fileUpload} />

          <button>Sign Up</button>
        </form>

        <p>
          Already have an account?{' '}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SignUp
