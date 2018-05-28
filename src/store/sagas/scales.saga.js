import {getScales} from '../../model/scales.service'
import {call, put, takeLatest} from 'redux-saga/effects'
import { scalesLoaded} from '../actions';
import * as actions from '../actions'

export function* scalesSaga(action) {
    console.log(action.payload)
    const data = yield call(getScales, action.payload)
    console.log("scales", data)
    yield put(scalesLoaded(data))
}

export function* watchScales() {
    yield takeLatest(actions.SCALES_READY, scalesSaga)
}

