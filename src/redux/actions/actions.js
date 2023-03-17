import * as types from '../../consts/actionTypes';

export const getRequest = (res) => ({
	type: types.GET_REQUEST,
	res
});
