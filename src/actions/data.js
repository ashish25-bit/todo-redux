import { ADD, REMOVE_ITEM, CHANGE_STATUS, INITIALIZE } from './types';

export const initialData = () => dispatch => {
  dispatch({
    type: INITIALIZE,
    payload: []
  })
}

export const addItem = data => dispatch => {
	dispatch({
		type: ADD,
		payload: data
	})
}

export const removeItem = index => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: index
  })
}

export const changeStatus = index => dispatch => {
	dispatch({
	  type: CHANGE_STATUS,
	  payload: index
	})
}
