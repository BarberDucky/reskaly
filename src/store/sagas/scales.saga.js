import {getScales, putScales} from '../../model/scales.service'
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

export function* scaleAddSaga(action) {
    let scales = action.payload.scales
    scales.scales = [...scales.scales, action.payload.scale]
    yield call(putScales, scales)
    yield put(scalesLoaded(scales))
}

export function* watchScaleAdd() {
    yield takeLatest(actions.SCALE_ADDED, scaleAddSaga)
}

export function* scaleDeleteSaga(action) {
    let scales = action.payload.scales
    scales.scales = scales.scales.filter((element, index) => index !== action.payload.scale)
    yield call(putScales, scales)
    yield put(scalesLoaded(scales))
}

export function* watchScaleDelete() {
    yield takeLatest(actions.SCALE_DELETED, scaleDeleteSaga)
}

export function* cellAddSaga(action) {
    let scales = action.payload.scales
    scales.scales = scales.scales.map((element, index) => {
        if (index === action.payload.scaleId) {
            return [...element, {name: action.payload.cellId}]
        } else {
            return element
        }
    })
    yield call(putScales, scales)
    yield put(scalesLoaded(scales))
}

export function* watchCellAdd() {
    yield takeLatest(actions.CELL_ADDED, cellAddSaga)
}

/*export function* boxUpdateSaga(action) {
    let selector = action.payload.selector
    selector.selector = selector.selector.map(element => {
        if (element.name === action.payload.box.name) {
            return action.payload.box
        } else {
            return element
        }
    })
    yield call(putSelector, selector)
    yield put(selectorLoaded(selector))
}

export function* watchBoxUpdate() {
    yield takeLatest(actions.BOX_UPDATE, boxUpdateSaga)
}*/