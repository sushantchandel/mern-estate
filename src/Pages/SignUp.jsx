import React from 'react'
import {Link} from "react-router-dom"
import './Signup.css'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' autoComplete='off' className='border p-3 rounded' id="username"></input>
        <input type='email' placeholder='email' autoComplete='off' className='border p-3 rounded' id="email"></input>
        <input type='password' placeholder='password' className='border p-3 rounded' id="password"></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '>Signup</button>
      </form>
      <div className='flex justify-between mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-600'>SignIn</span>
        </Link>
      </div>
    </div>
  )
}
