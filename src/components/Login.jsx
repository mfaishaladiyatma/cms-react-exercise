import React from 'react'
import coverCarLogin from '../image/Group 58.png'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setInputEmail, setInputPassword, setInputUsername } from './action'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const munculEmail = useSelector((state) => state)

    const dispatch = useDispatch()

    const handlePassword = () => {
        if (password.length < 6) {
            alert('Password must be at least 6 characters')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, '<<<email')
        console.log(password, '<<<password')
        dispatch(setInputEmail(email))
        dispatch(setInputPassword(password))
        handlePassword()
        console.log(munculEmail, '<<<munculEmail')
        // if (email === 'admin' && password === 'admin123') {
        //     return(
        //         <Navigate to='/cms' />
        //     )
        // }
        
    }

  return (
    <>
    <div className="wrapperLoginPage grid grid-cols-custom-loginPage border-black h-screen ">
        <div className='backgroundImage-left'>
            <img className='object-cover w-full h-screen' src={coverCarLogin} alt="" />
        </div>
        <div className='p-20 flex items-center justify-center'>
            <div className='flex flex-col gap-y-8 h-screen-60 w-screen font-helvetica'>
                <div>BINARIAN LOGO</div>
                <div className='font-bold text-[30px] '>Welcome, Admin BCR</div>
                <div className='flex flex-col gap-y-3'>
                    <div >Email</div>
                    <input className='h-[35px] border-2 border-[rgba(0, 0, 0, 0.1)] rounded-[5px] px-3' placeholder='Contoh: johndee@gmail.com' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div>Password</div>
                    <input className='h-[35px] border-2 border-[rgba(0, 0, 0, 0.1)] rounded-[5px] px-3' placeholder='6+ karakter' type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength='6'/>
                </div>
                <button className='bg-background-blue-car text-white h-[40px] rounded-[2px]' onClick={handleSubmit}>Sign In</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login