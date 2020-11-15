import React, { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  let { email, password } = data

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitForm = () => {
    console.log({ email, password })
    setData({ email: '', password: '' })
  }
  return (
    <div className="container-sm mt-4">
      <div className="row justify-content-md-center">

        <div className="col col-lg-6">
          <label htmlFor="email" className='form-label'>Email:</label>
          <input type="email" name="email" value={email} onChange={e => onChange(e)} className='form-control' placeholder="name@example.com" />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" name="password" value={password} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>
      <div className="row justify-content-md-center mt-4">
        <div className="col col-lg-6">
          <button className='btn btn-primary float-right' onClick={() => submitForm()}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Register
