import React from 'react'

const SignUp = () => {
  return (
    <div>
      <form action="">
        <div>
            <input 
            type="text" 
            name='username'
            placeholder='Enter UserName'
            required/>
        </div>
        <div>
            <input
            type="email"
            name='email' 
            placeholder='Service@gmail.com'
            required
            />
        </div>
        <div>
            <input
            type="password" 
            name='password'
            placeholder='Enter Password'
            required/>
        </div>
      </form>
      <div>
        <span>Already have an account? </span>
        <span>Login</span>
      </div>
    </div>
  )
}

export default SignUp
