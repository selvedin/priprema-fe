import { REGISTER_SUCCESS, LOGIN_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, LOADING_USER } from 'consts/actionTypes'


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  errors: {}
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}

export default authReducer