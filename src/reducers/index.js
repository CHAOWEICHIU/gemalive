import { combineReducers } from 'redux'
import counter from './counter'
import inputValue from './input_value'

const rootReducer = combineReducers({
  counter,
  inputValue
})

export default rootReducer
