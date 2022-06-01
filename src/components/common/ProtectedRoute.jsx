import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cms from '../Cms'

export default function ProtectedRoute() {
    const { emailSet, passwordSet } = useSelector((state) => state)
    // const isLoggedIn = username && password

    console.log(emailSet)
    console.log(passwordSet)

  if (emailSet === 'admin' && passwordSet === 'admin123' || emailSet === 'user' && passwordSet === 'user123') {
      return <Outlet />
      // return <Navigate to={'/cms'} />
  }


  return <Navigate to={'/'} />
}
