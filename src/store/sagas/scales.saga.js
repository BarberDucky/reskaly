import {getSelector, getScales, putSelector} from '../../model/selector.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';

export function* scalesSaga(action) {
    const data = yield call(getScales, action.payload)
    const what = yield put(scalesLoaded(data.scales))
}

export function* watchScales() {
    yield takeLatest('SCALES_REQUESTED', scalesSaga)
}

