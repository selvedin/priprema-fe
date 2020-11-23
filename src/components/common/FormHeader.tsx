import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaList, FaFilePdf, FaEdit, FaEye } from 'react-icons/fa'
import PdfDocument from 'components/common/PdfDocument'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { IPriprema } from 'types/Priprema'

interface FormProps {
  priprema: IPriprema,
  id: number,
  isView: boolean
}

const FormHeader = (props: FormProps) => {
  const { id, priprema, isView } = props

  return (
    <div className="row justify-content-md-center p-3 border-bottom">
      <div className="col">
        <h2 className='float-left'>Priprema</h2>
        <PDFDownloadLink className='text-danger float-right' document={<PdfDocument priprema={priprema} />} fileName={`priprema-${priprema.predmet}-${priprema.razred}-${priprema.nastavnaJedinica}`}>
          {({ blob, url, loading, error }) => (loading ? '' : <FaFilePdf size={22} />)}
        </PDFDownloadLink>
        <Link className='text-primary btn-sm float-right mx-1' to='/priprema' title='Nova priprema'>
          <FaPlusCircle size={22} />
        </Link>
        <Link className='text-secondary btn-sm float-right mx-1' to='/pripreme' title='Sve pripreme'>
          <FaList size={22} />
        </Link>
        {
          isView ?
            <Link className='text-success btn-sm float-right mx-1' to={'/priprema-edit/' + id} title='Uredi pripremu'>
              <FaEdit size={22} />
            </Link>
            :
            <Link className='text-info btn-sm float-right mx-1' to={'/priprema/' + id} title='Detalji pripreme'>
              <FaEye size={22} />
            </Link>
        }
        <div className='clearfix' />
      </div>
    </div>
  )
}

export default FormHeader
