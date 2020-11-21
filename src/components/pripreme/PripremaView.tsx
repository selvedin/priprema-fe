import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { defaultPriprema } from './defaultPriprema'
import { IPriprema } from 'types/Priprema'


const PripremaView = (props: any) => {
  const { id } = props.match.params
  const [priprema, setPriprema] = useState<IPriprema>(defaultPriprema)

  useEffect(() => {
    const getPriprema = async (id: string) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_PATH}/priprema/view`, { params: { id } })
        setPriprema(response.data)

      } catch (error) {
        swal(error.response.data, 'Greska', 'error')
      }
    }
    getPriprema(id)
  }, [])

  return (
    <div>
      <div className='container p-4'>
        <h1>Priprema</h1>
        <hr />
        {Object.entries(priprema).map(([key, value]) => {

          return (
            key != '_id' && value != '' ? <div key={key} className='row g-2'>
              <div className='col'>
                <div className="form-floating">
                  <input type="email" className="form-control" value={value} />
                  <label>{key}</label>
                </div>
              </div>
            </div> : null
          )
        })}
      </div>
    </div>
  )
}

export default PripremaView
