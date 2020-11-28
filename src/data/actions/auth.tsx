import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  LOGIN_FAILED,
  AUTH_ERROR,
  LOADING_USER,
  LOGED_OUT
} from 'consts/actionTypes'
import axios from 'axios'
import { setToken } from 'utils/setToken'
import swal from 'sweetalert'


export const loadUser = () => async (dispatch: any) => {
  const localToken = await localStorage.getItem('token')
  if (localToken) {
    setToken(localToken)
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_PATH}/users`)
      dispatch({ type: LOADING_USER, payload: response.data })
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error })
    }
  }
}

export const registerUser = (firstname: string,
  lastname: string,
  email: string,
  phone: string,
  username: string,
  password: string) => async (dispatch: any) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify({ firstname, lastname, email, phone, username, password })

      const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/users/register`, body, config)

      dispatch({ type: REGISTER_SUCCESS, payload: response.data })
      dispatch(loadUser())
    } catch (error) {
      let msg: string = '';
      if (error.response.data.errors) {
        error.response.data.errors.map((err: any) => msg += err.msg)
      }
      else {
        msg = error.response.data.msg
      }
      swal(msg, 'Validation failed', 'error')
      dispatch({ type: REGISTER_FAILED, payload: error })
    }
  }

export const loginUser = (username: string, password: string) => async (dispatch: any) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ username, password })

    const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/users/login`, body, config)
    dispatch({ type: LOGIN_SUCCESS, payload: response.data })
    dispatch(loadUser())
  } catch (error) {
    swal(error.response.data.msg, 'Validation failed', 'error')
    dispatch({ type: LOGIN_FAILED, payload: error })
  }
}

export const logOut = () => (dispatch: any) => {
  dispatch({ type: LOGED_OUT })
}