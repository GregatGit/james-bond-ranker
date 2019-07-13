import { combineReducers } from 'redux'
import actors from './reducer_actors'

const rootReducer = combineReducers({
  actors,
})

export default rootReducer
