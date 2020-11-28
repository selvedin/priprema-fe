import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from 'data/actions/auth'
import { FaFileInvoice } from 'react-icons/fa'

const Header = ({ isAuthenticated, username, logOut }: { isAuthenticated: boolean, username: string, logOut: any }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><FaFileInvoice /> {process.env.REACT_APP_NAME}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ display: isAuthenticated ? "none" : "block" }}>
                <Link className="nav-link" to="/login">Prijava</Link>
              </li>
              <li className="nav-item" style={{ display: isAuthenticated ? "none" : "block" }}>
                <Link className="nav-link" to="/register">Registracija</Link>
              </li>
              <li className="nav-item" style={{ display: isAuthenticated ? "block" : "none" }}>
                <a className="nav-link" onClick={() => logOut()} href='/'>Odjava ({username})</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username
})

export default connect(mapStateToProps, { logOut })(Header)
