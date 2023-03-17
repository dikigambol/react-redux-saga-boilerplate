import * as types from '../../consts/actionTypes';

export default function(state = [], action) {
	switch (action.type) {
		case types.GET_REQUEST:
			return [...state];
		case types.GET_SUCCESS:
			if (action.data) {
				return [...action, action.data];
			}
			return [...state, action];
		default:
			return state;
	}
}
