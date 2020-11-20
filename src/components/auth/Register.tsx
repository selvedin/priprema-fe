import { registerUser } from 'data/actions/auth'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import { User } from 'types/User'

interface RegisterProps {
  isAuthenticated: boolean,
  registerUser: any
}

const Register: React.FC<RegisterProps> = ({ isAuthenticated, registerUser }) => {

  let defaultUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  }

  const [user, setUser] = useState(defaultUser)

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  let { firstname, lastname, email, phone, username, password } = user

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  }

  const submitForm = () => {
    if (email === '' || username === '' || password === '') {
      return swal('Email, username and password are required.', 'Validation failed', 'error')
    }
    else {
      registerUser(firstname, lastname, email, phone, username, password)
    }
  }
  return (
    <div className="container-sm mt-4">
      <h1>Registracija</h1>
      <hr />

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="firstname" className='form-label'>Ime:</label>
          <input type="text" name="firstname" value={firstname} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="lastname" className='form-label'>Prezime:</label>
          <input type="text" name="lastname" value={lastname} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="email" className='form-label'>Email:</label>
          <input type="email" name="email" value={email} onChange={e => onChange(e)} className='form-control' placeholder="name@example.com" />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="phone" className='form-label'>Telefon:</label>
          <input type="text" name="phone" value={phone} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="username" className='form-label'>Korisničko ime:</label>
          <input type="text" name="username" value={username} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <label htmlFor="password" className='form-label'>Šifra</label>
          <input type="password" name="password" value={password} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-4">
        <div className="col col-lg-6">
          <button className='btn btn-primary float-right' onClick={() => submitForm()}>Registruj</button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { registerUser })(Register)
