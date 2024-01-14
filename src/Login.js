import React from 'react'
import { Navigate, useNavigate } from 'react-router'

function Login() {
    let navigate= useNavigate()
    function submitform(e){
        e.preventDefault()
        navigate("/dashboard")
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter your employee id'></input>
            <button onClick={submitform}>Submit</button>
        </form>
    </div>
  )
}

export default Login