import { combineReducers } from 'redux'
import actors from './reducer_actors'
import movies from './reducer_movies'

const rootReducer = combineReducers({
  actors,
  movies
})

export default rootReducer
