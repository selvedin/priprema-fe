import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { savePriprema } from 'data/actions/priprema'
import swal from 'sweetalert'
import axios from 'axios'
import { defaultPriprema } from './defaultPriprema'
import { Redirect } from 'react-router-dom'

interface PripremaProps {
  userDetails: string,
  savePriprema: any,
  match: any
}

const PripremaForm: React.FC<PripremaProps> = (props) => {
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
  }, [])



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

  const submitForm = () => {
    if (skolskaGodina === '' || nastavnik === '' || razred === '' || predmet === '') {
      return swal('Školska godina, nastavnik, razred i predmet su obavezna polja.', 'Validacija', 'error')
    }
    else {
      console.log({ skolskaGodina, razred })
      savePriprema(skolskaGodina,
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

      return <Redirect to='/' />
    }
  }
  return (
    <div className="container mt-4">
      <h1>Priprema</h1>
      <hr />

      <div className="row justify-content-md-center">
        <input type="hidden" name="_id" value={_id} onChange={e => onChange(e)} className='form-control' />
        <div className="col">
          <label htmlFor="firstname" className='form-label'>Školska godina:</label>
          <input type="text" name="skolskaGodina" value={skolskaGodina} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col">
          <label htmlFor="nastavnik" className='form-label'>Nastavnik:</label>
          <input type="text" name="nastavnik" value={nastavnik} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col">
          <label htmlFor="razred" className='form-label'>Razred:</label>
          <input type="text" name="razred" value={razred} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col">
          <label htmlFor="predmet" className='form-label'>Predmet:</label>
          <input type="text" name="predmet" value={predmet} onChange={e => onChange(e)} className='form-control' />
        </div>
      </div>

      <div className="row justify-content-md-center mt-4">
        <div className="col">
          <button className='btn btn-primary float-right' onClick={() => submitForm()}>Snimi</button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any, props: any) => ({
  userDetails: state.userDetails,
  priprema: state.priprema,
  props
})

export default connect(mapStateToProps, { savePriprema })(PripremaForm)
