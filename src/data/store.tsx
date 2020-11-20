import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from 'data/reducers/authReducer'
import pripremaReducer from 'data/reducers/pripremaReducer'


const middleware = [thunk]
const initialState: any = {}

const store = createStore(
  authReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store