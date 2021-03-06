import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaListAlt, FaTable } from 'react-icons/fa'

const Dashboard = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    isAuthenticated ?
      <div className="container-md mt-4">
        <div className="row gx-5 justify-content-md-center">
          <div className="col text-center">
            <div className="p-3">
              <Link className='btn btn-default btn-lg' to='/priprema'><FaPlusCircle size={32} /> <br />Nova priprema</Link>
            </div>
          </div>
          <div className="col text-center">
            <div className="p-3">
              <Link className='btn btn-default btn-lg' to='/pripreme'><FaListAlt size={32} /> <br />Sve pripreme</Link>
            </div>
          </div>
          <div className="col text-center">
            <div className="p-3">
              <Link className='btn btn-default btn-lg' to='/'><FaTable size={32} /> <br />Svi razredi</Link>
            </div>
          </div>
        </div>
      </div> : null
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard)
