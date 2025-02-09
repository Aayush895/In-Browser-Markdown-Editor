import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import style from './Signup.module.css'
import { signup } from '../apis/authApis'

function SignUp() {
  const [userData, setuserData] = useState({
    username: '',
    email: '',
    password: '',
    profilePic: '',
  })

  const profilePicRef = useRef(null)

  function handleUserinfo(e) {
    const { name, value } = e.target
    setuserData({
      ...userData,
      [name]: value,
    })
  }

  function handleFileupload(e) {
    setuserData({
      ...userData,
      profilePic: e.target.files[0],
    })
  }

  async function handleFormsubmission(e) {
    e.preventDefault()
    const response = await signup(userData)
    setuserData({
      username: '',
      email: '',
      password: '',
      profilePic: '',
    })
    profilePicRef.current.value = ''
    console.log('LOGGING RESPONSE: ', response)
  }

  return (
    <div id={style.signupContainer}>
      <div id={style.formContainer}>
        <div id={style.header}>
          <h1>Welcome to MarkDown</h1>
          <p>Create your account</p>
        </div>
        <form action="post" onSubmit={handleFormsubmission}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUserinfo}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleUserinfo}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleUserinfo}
          />

          <label htmlFor="profilePic">Upload your profile picture</label>
          <input
            type="file"
            name="profilePic"
            id={style.fileUpload}
            onChange={handleFileupload}
            ref={profilePicRef}
          />

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
