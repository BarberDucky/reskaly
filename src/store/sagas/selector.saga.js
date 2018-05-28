
import {getSelector, putSelector} from '../../model/selector.service'
import {call, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded} from '../actions';
import * as actions from '../actions'
import { putScales } from '../../model/scales.service';

export function* selectorSaga(action) {
    const data = yield call(getSelector, action.payload)
    yield put(selectorLoaded(data))
    yield put(actions.scalesReady(action.payload))
}

export function* watchSelector() {
    yield takeLatest(actions.SUBJECT_SELECTED, selectorSaga)
}

export function* boxAddSaga(action) {
    let selector = action.payload.selector
    selector.selector = [...selector.selector, action.payload.box]
    yield call(putSelector, selector)
    yield put(selectorLoaded(selector))
}

export function* watchBoxAdd() {
    yield takeLatest(actions.BOX_SUBMIT, boxAddSaga)
}

export function* boxDeleteSaga(action) {
    let selector = action.payload.selector
    selector.selector = selector.selector.filter(element => element.name !== action.payload.name)

    let scales = action.payload.scales
    scales.scales = scales.scales.map((element, index) => {
            return element.filter(element => element.name !== action.payload.name)
    })

    yield call(putScales, scales)
    yield put(actions.scalesLoaded(scales))

    yield call(putSelector, selector)
    yield put(selectorLoaded(selector))
}

export function* watchBoxDelete() {
    yield takeLatest(actions.BOX_DELETED, boxDeleteSaga)
}

export function* boxUpdateSaga(action) {
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
}