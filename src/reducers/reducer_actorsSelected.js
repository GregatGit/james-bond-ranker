import { actors } from '../data'

const actorList = Object.keys(actors)

export default function(state = actorList, action){
  return state
}