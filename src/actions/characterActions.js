import axios from 'axios'
import {
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_DETAILS_REQUEST,
  CHARACTER_DETAILS_SUCCESS,
  CHARACTER_DETAILS_FAIL
} from '../constants/characterConstants.js'

export const listCharacters = () => async(dispatch) => {
  try {
    dispatch({ type: CHARACTER_LIST_REQUEST })

    const { data } = await axios.get('/api/characters')

    dispatch({
      type: CHARACTER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CHARACTER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listCharacterDetails = (id) => async(dispatch) =>{
  try{
    dispatch({ type: CHARACTER_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/characters/${id}`)
    dispatch({
      type: CHARACTER_DETAILS_SUCCESS,
      payload: data,
    })
  }catch (error){
    dispatch({
      type: CHARACTER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}