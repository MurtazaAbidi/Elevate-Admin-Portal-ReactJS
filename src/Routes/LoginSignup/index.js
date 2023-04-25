import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../../Pages/Login'


const LoginSignup = ({setJWTAuthentication}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setJWTAuthentication={setJWTAuthentication}/>}/>
        <Route path='/*' element={<Navigate to={'/'} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default LoginSignup