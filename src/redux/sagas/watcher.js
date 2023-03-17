import { takeLatest } from 'redux-saga/effects';
import { getRequestSaga } from './saga';

import * as types from '../../consts/actionTypes';

export default function* watchSaga() {
	yield takeLatest(types.GET_REQUEST, getRequestSaga);
}
