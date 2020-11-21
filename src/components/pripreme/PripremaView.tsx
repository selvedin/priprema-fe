import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { defaultPriprema } from './defaultPriprema'
import { IPriprema } from 'types/Priprema'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaList, FaFilePdf, FaEdit } from 'react-icons/fa'
import PdfDocument from 'components/common/PdfDocument'
import { PDFDownloadLink } from '@react-pdf/renderer'


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
      <div className="row justify-content-md-center p-3 border-bottom">
        <div className="col">
          <h2 className='float-left'>Pripreme</h2>
          <PDFDownloadLink className='text-danger float-right' document={<PdfDocument priprema={priprema} />} fileName={`priprema-${priprema.predmet}-${priprema.razred}-${priprema.nastavnaJedinica}`}>
            {({ blob, url, loading, error }) => (loading ? '' : <FaFilePdf size={22} />)}
          </PDFDownloadLink>
          <Link className='text-primary btn-sm float-right mx-1' to='/priprema' title='Nova priprema'>
            <FaPlusCircle size={22} />
          </Link>
          <Link className='text-secondary btn-sm float-right mx-1' to='/pripreme' title='Sve pripreme'>
            <FaList size={22} />
          </Link>
          <Link className='text-success btn-sm float-right mx-1' to={'/priprema-edit/' + id} title='Uredi pripremu'>
            <FaEdit size={22} />
          </Link>
          <div className='clearfix' />
        </div>
      </div>
      <div className="row justify-content-md-center p-3">
        {Object.entries(priprema).map(([key, value]) => {
          return (
            key !== '_id' && key !== '__v' && value !== '' ? <div key={key} className='row g-2'>
              <div className='col'>
                <div className="form-floating">
                  <input type="email" className="form-control" readOnly={true} value={value} />
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
