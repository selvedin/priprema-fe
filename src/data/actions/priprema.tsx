import {
  PRIPREMA_SAVE,
  PRIPREMA_SAVE_FAILED
} from 'consts/priprema'

import axios from 'axios'
import swal from 'sweetalert'

export const savePriprema = (skolskaGodina: string,
  nastavnik: string,
  razred: string,
  predmet: string,
  datum: string,
  nastavnaOblast: string,
  nastavnaJedinica: string,
  ciljeviOdgojni: string,
  ciljeviObrazovni: string,
  ciljeviFunkcionalni: string,
  ciljeviDuhovni: string,
  strukturaCasa: string,
  tipCasa: string,
  obliciNastavnogRada: string,
  nastavniObjekti: string,
  nastavniPomagala: string,
  korelacija: string,
  lokacija: string,
  planTable: string,
  literatura: string,
  nastavneMetode: string,
  uvodniTrajanje: string,
  uvodniSadrzaj: string,
  glavniTrajanje: string,
  glavniSadrzaj: string,
  zavrsniTrajanje: string,
  zavrsniSadrzaj: string,
  korekcija: string,
  domaciRad: string, _id: string) => async (dispatch: any) => {
    console.log()
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify({
        skolskaGodina,
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
        korekcija,
        domaciRad,
        _id
      })

      console.log({ body })

      const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/priprema/save`, body, config)

      dispatch({ type: PRIPREMA_SAVE, payload: response.data })

    } catch (error) {
      let msg: string = '';
      if (error.response.data.errors) {
        error.response.data.errors.map((err: any) => msg += err.msg)
      }
      else if (error.response.data) {
        msg = error.response.data.msg
      }
      else {
        msg = 'Unknown error apeared'
      }
      await swal(msg, 'Neuspjelo snimanje', 'error')
      dispatch({ type: PRIPREMA_SAVE_FAILED, payload: error })
    }
  }