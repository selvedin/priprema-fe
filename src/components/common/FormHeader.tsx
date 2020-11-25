import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaList, FaFilePdf, FaEdit, FaEye } from 'react-icons/fa'
import PdfDocument from 'components/common/PdfDocument'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { IPriprema } from 'types/Priprema'
import axios from 'axios'
import FileDownload from 'js-file-download'

interface FormProps {
  priprema: IPriprema,
  id: number,
  isView: boolean
}

const FormHeader = (props: FormProps) => {
  const { id, priprema, isView } = props

  const getPdf = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_PATH}/exports/pdf`,
        { responseType: 'blob', params: { name: 'Priprema', id: 'somestring' } })
      FileDownload(response.data, 'export.pdf')

    } catch (error) {
      console.log(error.response.data, 'Greska', 'error')
    }
  }
  return (
    <div className="row justify-content-md-center p-3 border-bottom">
      <div className="col">
        <h2 className='float-left'>Priprema</h2>
        <button className='btn btn-default' onClick={getPdf}>Export</button>
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
