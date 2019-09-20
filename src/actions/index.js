export const MOVIE_SELECTED = `MOVIE_SELECTED`

export function movieSelected(movie){
  return {
    type: MOVIE_SELECTED,
    payload: movie
  }
}