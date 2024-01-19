import {React, useState} from 'react'


function Login({receivemployeeid}) { //render this page only if the user is not loggedin 
  const [employeeid, setEmployeeid]= useState() 
   
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
        </form>
    </div>
  )
}

export default Login