
import {getSelector, getScales, putSelector} from '../../model/selector.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';
import * as actions from '../actions'

export function* selectorSaga(action) {
    const data = yield call(getSelector, action.payload)
    yield put(selectorLoaded(data))
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
    yield call(putSelector, selector)
    yield put(selectorLoaded(selector))
}

export function* watchBoxDelete() {
    yield takeLatest(actions.BOX_DELETED, boxDeleteSaga)
}
