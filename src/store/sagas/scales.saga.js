import {getScales} from '../../model/scales.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';
import * as actions from '../actions'

export function* scalesSaga(action) {
    const data = yield call(getScales, action.payload)
    yield put(scalesLoaded(data.scales))
}

export function* watchScales() {
    yield takeLatest(actions.SUBJECT_SELECTED, scalesSaga)
}

