import { ADD, REMOVE_ITEM, CHANGE_STATUS, INITIALIZE } from '../actions/types';

const initialState = [];

const add = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD:
			return [...state, payload];
		
		case REMOVE_ITEM:
			return state.filter(todo => todo.id !== payload);

		case CHANGE_STATUS:
			return state.map(todo => {
				if (todo.id === payload)
				todo.completed = !todo.completed;
				return todo;
			})

		case INITIALIZE:
			return [...state, ...payload];
		
		default:
			return state;
	}
}

export default add;
