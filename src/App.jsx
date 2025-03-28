import React from 'react'
import { HashRouter, Routes, Route  } from 'react-router-dom' 
import Login from './page/Auth/Login'
import SignUp from './page/Auth/SignUp'
import LandingPage from './page/Landing/LandingPage'

const App = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element = {<LandingPage/>} />
            <Route path = "/auth/login" element = {<Login />} />
            <Route path = "/auth/signup" element = {<SignUp/>} />
            <Route path='/auth/ResetPassword' element = {<div>ResetPassword</div>} />
            <Route path='/auth/forgotPassword' element = {<div>ForgotPassword</div>} />
            <Route path='/auth/emailVerification' element = {<div>EmailVerification</div>} />
            <Route path='*' element = {<div>404</div>} />


            <Route path='/cart' element = {<div>Cart</div>} />



            {/* <Route path='/:username' element = {<div>Home</div>} /> */}




            
        </Routes>
    </HashRouter>
  )
}

export default App