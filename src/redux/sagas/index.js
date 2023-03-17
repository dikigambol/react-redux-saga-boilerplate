import { all } from 'redux-saga/effects';
import watchSaga from './watcher';

export default function* rootSaga() {
	yield all([watchSaga()]);
}
