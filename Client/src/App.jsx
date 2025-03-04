import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import UserContext from './context/UserContext.js'
import Signup from './Authentication/Signup.jsx'
import Login from './Authentication/Login'

function App() {
  const [loginInfo, setloginInfo] = useState({
    accessToken: '',
    expiresAt: '',
    userInfo: '',
    message: '',
    success: '',
  })
  return (
    <UserContext.Provider value={{ loginInfo, setloginInfo }}>
      <BrowserRouter>
        <Routes>
          {/* Below route redirects from "/" to "/signup" */}
          <Route path="/" element={<Navigate to="/signup" />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
