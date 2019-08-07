export const MOVIE_SELECTED = `MOVIE_SELECTED`

export function movieSelected(movie){
  console.log(movie)
  return {
    type: MOVIE_SELECTED,
    payload: movie
  }
}