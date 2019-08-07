import { MOVIE_SELECTED } from '../actions'

export default function(state = 'Click on a movie', action) {
  switch (action.type) {
    case MOVIE_SELECTED:
      return action.payload

    default:
      return state
  }
}
