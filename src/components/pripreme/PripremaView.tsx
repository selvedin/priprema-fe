import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { defaultPriprema } from './defaultPriprema'
import { IPriprema } from 'types/Priprema'
import FormHeader from 'components/common/FormHeader'


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
    <div className='container px-4'>
      <FormHeader priprema={priprema} id={id} isView={true} />
      <div className="row justify-content-md-center">
        <table className='table table-borderless table-priprema'>
          <tbody className='text-left'>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr>
              <td className='fw-bold' colSpan={2}>NASTAVNI PREDMET: </td>
              <td className='border-bottom' colSpan={8}>{priprema.predmet}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>RAZRED I ODJELJENJE: </td>
              <td className='border-bottom' colSpan={8}>{priprema.razred}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>DATUM: </td>
              <td className='border-bottom' colSpan={8}>{priprema.datum}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>ŠKOLSKA GODINA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.skolskaGodina}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>NASTAVNA JEDINKA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.nastavnaJedinica}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>TIP ČASA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.tipCasa}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>CILJ ČASA: </td>
              <td colSpan={8}></td>
            </tr>
            <tr>
              <td></td>
              <td className='fw-bold' colSpan={2}>a) OBRAZOVNI: </td>
              <td className='border-bottom' colSpan={7}>{priprema.ciljeviObrazovni}</td>
            </tr>
            <tr>
              <td></td>
              <td className='fw-bold' colSpan={2}>b) ODGOJNI: </td>
              <td className='border-bottom' colSpan={7}>{priprema.ciljeviOdgojni}</td>
            </tr>
            <tr>
              <td></td>
              <td className='fw-bold' colSpan={2}>c) FUNKCIONALNI: </td>
              <td className='border-bottom' colSpan={7}>{priprema.ciljeviFunkcionalni}</td>
            </tr>
            <tr>
              <td></td>
              <td className='fw-bold' colSpan={2}>d) DUHOVNI: </td>
              <td className='border-bottom' colSpan={7}>{priprema.ciljeviDuhovni}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>OBLICI RADA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.obliciNastavnogRada}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>METODE NASTAVNOG RADA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.nastavneMetode}</td>
            </tr>
            <tr>
              <td className='fw-bold' colSpan={2}>NASTAVNA SREDSTVA: </td>
              <td className='border-bottom' colSpan={8}>{priprema.nastavniPomagala}</td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold text-center' colSpan={10}>TOK NASTAVNOG RADA – STRUKTURA ČASA </td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold' colSpan={10}>UVODNI DIO ({priprema.uvodniTrajanje} minuta)</td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='border' colSpan={10} dangerouslySetInnerHTML={{ __html: priprema.uvodniSadrzaj }}></td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold' colSpan={10}>GLAVNI DIO ({priprema.glavniTrajanje} minuta)</td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='border' colSpan={10} dangerouslySetInnerHTML={{ __html: priprema.glavniSadrzaj }}></td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold' colSpan={10}>ZAVRŠNI DIO ({priprema.zavrsniTrajanje} minuta)</td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='border' colSpan={10} dangerouslySetInnerHTML={{ __html: priprema.zavrsniSadrzaj }}></td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold' colSpan={2}>KOREKCIJA - DOPUNA </td>
              <td className='border-bottom' colSpan={8}></td>
            </tr>

            <tr>
              <td className='border' colSpan={10} dangerouslySetInnerHTML={{ __html: priprema.korekcija }} ></td>
            </tr>

            <tr><td colSpan={10}></td></tr>

            <tr>
              <td className='fw-bold' colSpan={2}>Nastavnik: </td><td className='border-bottom' colSpan={3}>{priprema.nastavnik}</td>
              <td className='fw-bold' colSpan={2}>Pregledao: </td><td className='border-bottom' colSpan={3}></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PripremaView
