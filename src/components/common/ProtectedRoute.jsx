import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute() {
    const { username, password } = useSelector((state) => state)
    // const isLoggedIn = username && password

    console.log(password)

  if (username === '' && password === '') {
      return <Outlet />
  }


  return <Navigate to={'/'} />
}
