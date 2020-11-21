import React, { Fragment } from 'react'
import PripremaTable from './PripremaTable'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'


function PripremeComponent() {

  return (
    <Fragment>

      <div className="row justify-content-md-center p-3 border-bottom">
        <div className="col">
          <h2 className='float-left'>Pripreme</h2>
          <Link className='btn btn-primary btn-sm float-right' to='/priprema' title='Nova priprema'>
            <FaPlusCircle size={16} />
          </Link>
          <div className='clearfix'></div>
        </div>
      </div>
      <div className="row justify-content-md-center p-3">
        <div className="col">
          <PripremaTable />
        </div>
      </div>
    </Fragment>
  )
}

export default PripremeComponent
