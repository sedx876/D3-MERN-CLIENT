import { 
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL
} from '../constants/characterConstants.js'

//Takes in initialstate and action
export const characterListReducer = (state = { characters: []}, action) => {
  //Take in type of action
  switch (action.type){
    //Piece of state
    case CHARACTER_LIST_REQUEST:
      return { loading: true, characters: [] }
    case CHARACTER_LIST_SUCCESS:
      return {
        loading: false,
        characters: action.payload.characters
      }
    case CHARACTER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}