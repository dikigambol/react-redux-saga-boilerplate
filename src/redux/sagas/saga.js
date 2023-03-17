import { put, call } from 'redux-saga/effects';
import { getTitle } from '../api';
import * as types from '../../consts/actionTypes';

export function* getRequestSaga({ payload }) {
	try {
		const data = yield call(getTitle, payload);

		yield put({ type: types.GET_SUCCESS, data });
	} catch (error) {
		yield put({ type: types.SEARCH_ERROR, error });
	}
}
