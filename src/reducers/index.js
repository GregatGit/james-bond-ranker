import { combineReducers } from 'redux'
import actors from './reducer_actors'
import movies from './reducer_movies'
import actorsSelected from './reducer_actorsSelected'
import movie from './reducer_movieSelected'

const rootReducer = combineReducers({
  actors,
  movies,
  actorsSelected,
  movie
})

export default rootReducer
