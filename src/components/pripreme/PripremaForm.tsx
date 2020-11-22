import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { savePriprema } from 'data/actions/priprema'
import swal from 'sweetalert'
import axios from 'axios'
import { defaultPriprema } from './defaultPriprema'
import { Redirect } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { Editor } from '@tinymce/tinymce-react'
import { ToastContainer, toast } from 'react-toastify'


interface PripremaProps {
  userDetails: string,
  savePriprema: any,
  match: any
}

const PripremaForm: React.FC<PripremaProps> = (props) => {
  const notify = (msg: string) => toast.success(msg)
  const [savingForm, setSavingForm] = useState(false)
  const [priprema, setPriprema] = useState(defaultPriprema)
  const { userDetails, savePriprema, match } = props
  const { id } = match.params

  useEffect(() => {
    const getPriprema = async (id: string) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_PATH}/priprema/view`, { params: { id } })
        setPriprema(response.data)
      } catch (error) {
        swal(error.response.data, 'Greska', 'error')
      }
    }

    if (id) {
      getPriprema(id)
    }
  }, [id])



  defaultPriprema.nastavnik = userDetails


  let { skolskaGodina,
    nastavnik,
    razred,
    predmet,
    datum,
    nastavnaOblast,
    nastavnaJedinica,
    ciljeviOdgojni,
    ciljeviObrazovni,
    ciljeviFunkcionalni,
    ciljeviDuhovni,
    strukturaCasa,
    tipCasa,
    obliciNastavnogRada,
    nastavniObjekti,
    nastavniPomagala,
    korelacija,
    lokacija,
    planTable,
    literatura,
    nastavneMetode,
    uvodniTrajanje,
    uvodniSadrzaj,
    glavniTrajanje,
    glavniSadrzaj,
    zavrsniTrajanje,
    zavrsniSadrzaj,
    domaciRad, _id } = priprema

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriprema({ ...priprema, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleDateChange = (date: string | undefined) => {
    let selectedDate = new Date()
    if (date !== undefined) {
      selectedDate = new Date(Date.parse(date))
    }
    setPriprema({ ...priprema, datum: `${selectedDate.getDate()}.${selectedDate.getMonth() + 1}.${selectedDate.getFullYear()}` })

  }

  const handleEditorChange = (tekst: string) => {
    setPriprema({ ...priprema, uvodniSadrzaj: tekst })
  }

  const submitForm = async () => {
    if (skolskaGodina === '' || nastavnik === '' || razred === '' || predmet === '') {
      return swal('Školska godina, nastavnik, razred i predmet su obavezna polja.', 'Validacija', 'error')
    }
    else {
      setSavingForm(true)
      await savePriprema(skolskaGodina,
        nastavnik,
        razred,
        predmet,
        datum,
        nastavnaOblast,
        nastavnaJedinica,
        ciljeviOdgojni,
        ciljeviObrazovni,
        ciljeviFunkcionalni,
        ciljeviDuhovni,
        strukturaCasa,
        tipCasa,
        obliciNastavnogRada,
        nastavniObjekti,
        nastavniPomagala,
        korelacija,
        lokacija,
        planTable,
        literatura,
        nastavneMetode,
        uvodniTrajanje,
        uvodniSadrzaj,
        glavniTrajanje,
        glavniSadrzaj,
        zavrsniTrajanje,
        zavrsniSadrzaj,
        domaciRad,
        _id)

      notify('Podaci su usljesno snimljeni')
      setSavingForm(false)
    }
  }
  return (
    <div className="container mt-4">
      <h1>Priprema</h1>
      <hr />

      <input type="hidden" name="_id" value={_id} onChange={e => onChange(e)} className='form-control' />
      <input type="hidden" name="nastavnik" value={nastavnik} onChange={e => onChange(e)} className='form-control' />

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-4">
          <label htmlFor="predmet" className='form-label fw-bold'>Nastavni predmet:</label>
          <input type="text" name="predmet" value={predmet} onChange={e => onChange(e)} className='form-control' />
        </div>

        <div className="col-md-4">
          <label htmlFor="razred" className='form-label fw-bold'>Razred i odjeljenje:</label>
          <input type="text" name="razred" value={razred} onChange={e => onChange(e)} className='form-control' />
        </div>

        <div className="col-md-4">
          <label htmlFor="firstname" className='form-label fw-bold'>Školska godina:</label>
          <input type="text" name="skolskaGodina" value={skolskaGodina} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-4">
          <label htmlFor="datum" className='form-label fw-bold'>Datum:</label><br />
          <DatePicker dateFormat='dd.MM.yyyy.' value={datum} onChange={date => handleDateChange(date?.toLocaleString())} className='form-control' />
        </div>

        <div className="col-md-8">
          <label htmlFor="nastavnaJedinica" className='form-label fw-bold'>Nastavna jedinka:</label>
          <input type="text" name="nastavnaJedinica" value={nastavnaJedinica} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="tipCasa" className='form-label fw-bold'>Tip časa:</label><br />
          <input type="text" name="tipCasa" value={tipCasa} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="ciljeviCasa" className='form-label fw-bold'><h3>Cilj časa:</h3></label><br />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="ciljeviObrazovni" className='form-label fw-bold'>Obrazovni:</label><br />
          <input type="text" name="ciljeviObrazovni" value={ciljeviObrazovni} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="ciljeviOdgojni" className='form-label fw-bold'>Odgojni:</label><br />
          <input type="text" name="ciljeviOdgojni" value={ciljeviOdgojni} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="ciljeviFunkcionalni" className='form-label fw-bold'>Funkcionalni:</label><br />
          <input type="text" name="ciljeviFunkcionalni" value={ciljeviFunkcionalni} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="ciljeviDuhovni" className='form-label fw-bold'>Duhovni:</label><br />
          <input type="text" name="ciljeviDuhovni" value={ciljeviDuhovni} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-2">
        <div className="col-md-12">
          <label htmlFor="nastavnaJedinica" className='form-label fw-bold'>Uvodni dio:</label>
          <Editor
            apiKey='wmdmbf9x0awj6m30d51rucxght27s1j3tn9dkxweue8dqxh4'
            initialValue={uvodniSadrzaj}
            value={uvodniSadrzaj}
            init={{
              height: 250,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={tekst => handleEditorChange(tekst)}
          />
        </div>

      </div>






      <div className="row justify-content-md-center mt-4">
        <div className="col">
          <button className='btn btn-primary float-right' disabled={savingForm} onClick={() => submitForm()}>Snimi</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
const mapStateToProps = (state: any, props: any) => ({
  userDetails: state.userDetails,
  priprema: state.priprema,
  props
})

export default connect(mapStateToProps, { savePriprema })(PripremaForm)
