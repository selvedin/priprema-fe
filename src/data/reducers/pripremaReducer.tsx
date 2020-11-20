import { defaultPriprema } from 'components/pripreme/defaultPriprema'
import {
  PRIPREMA_SAVE,
  PRIPREMA_SAVE_SUCCESS,
  PRIPREMA_SAVE_FAILED
} from 'consts/priprema'


const initialState = defaultPriprema

const pripremaReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case PRIPREMA_SAVE:
      return { ...payload }
    case PRIPREMA_SAVE_FAILED:
      return { ...state }
    default:
      return state
  }
}

export default pripremaReducer