import React from 'react'

function Login() {
  return (
    <div>
        <form className='b-1p'>
            <input type="email" placeholder='Email' /> <br />
            <input type="password" placeholder='Password' /> <br />
            <button>Sign In</button>

        </form>
    </div>
  )
}

export default Login