import React from 'react'
import PripremaTable from './PripremaTable'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'


function PripremeComponent() {

  return (
    <div className='container pt-3'>

      <div className="row justify-content-md-center border-bottom">
        <div className="col">
          <h2 className='float-left'>Pripreme</h2>
          <Link className='rounded-circle pb-2 float-right' to='/priprema' title='Nova priprema'>
            <FaPlusCircle size={24} />
          </Link>
          <div className='clearfix'></div>
        </div>
      </div>
      <div className="row justify-content-md-center p-3">
        <div className="col">
          <PripremaTable />
        </div>
      </div>
    </div>
  )
}

export default PripremeComponent
