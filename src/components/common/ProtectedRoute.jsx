import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute() {
    const { username, password } = useSelector((state) => state)
    // const isLoggedIn = username && password

    console.log(username)

  if (username === 'admin' && password === 'admin123') {
      return <Outlet />
  }

  return <Navigate to={'/'} />
}
