import { 
  createStore, 
  combineReducers, 
  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  characterListReducer,
  characterDetailsReducer,
 } from './reducers/characterReducers'

const reducer = combineReducers({
  //characterList will show as piece of state
  characterList: characterListReducer,
  characterDetails: characterDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store