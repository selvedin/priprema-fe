import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  LOGIN_FAILED,
  AUTH_ERROR,
  LOADING_USER,
  LOGED_OUT
} from 'consts/actionTypes'


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  username: '',
  errors: {}
}

const authReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      localStorage.setItem('username', payload.username)
      return {
        ...state,
        isAuthenticated: true,
        username: payload.username
      }
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        username: ''
      }
    case LOADING_USER:
      localStorage.getItem('token')
      return {
        ...state,
        isAuthenticated: true,
        username: payload.username
      }
    case LOGED_OUT:
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      return {
        ...state,
        isAuthenticated: false,
        username: ''
      }
    default:
      return state
  }
}

export default authReducer