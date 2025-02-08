import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Signup from './Authentication/Signup.jsx'
import Login from "./Authentication/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Below route redirects from "/" to "/signup" */}
        <Route path="/" element={<Navigate to="/signup" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
