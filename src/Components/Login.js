import {React, useState} from 'react'


function Login({receivemployeeid}) {
  const [employeeid, setEmployeeid]= useState()
  const [errormsg, setErrormsg]= useState("")
   
    function submitform(e){
        e.preventDefault()
      
        receivemployeeid(employeeid)
    }
  return (
    <div>
        <form className='enteremployeeid'>
          <p>Please enter your Employee Id here</p>
            <input type='text' placeholder='Enter your employee id' onChange={e=> setEmployeeid(e.target.value)} ></input>
            <button onClick={submitform}>Login</button>
            <p className='error'>{errormsg}</p>
        </form>
    </div>
  )
}

export default Login