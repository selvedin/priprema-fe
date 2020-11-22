import { loginUser } from 'data/actions/auth'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Loader from 'react-loader-spinner'

const Login = ({ isAuthenticated, loginUser }: { isAuthenticated: boolean, loginUser: any }) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  let { username, password } = data

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })
  }

  const submitForm = async () => {
    if (username === '' || password === '') {
      return swal('Empty username or password', 'Validation failed', 'error')
    }
    else {
      setLoading(true)
      await loginUser(username, password)
      setLoading(false)
    }
  }
  return (
    <div className="container-sm mt-4">
      <h1>Prijava</h1>
      <hr />
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
        <div className="col col-lg-6 text-right">
          {!loading ? <button className='btn btn-primary' onClick={() => submitForm()}>Prijava</button> : <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={70}

          />}

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)
