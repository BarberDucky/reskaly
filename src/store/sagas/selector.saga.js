
import {getSelector, getScales, putSelector} from '../../model/selector.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';
import * as actions from '../actions'

export function* selectorSaga(action) {
    const data = yield call(getSelector, action.payload)
    yield put(selectorLoaded(data.selector))
}

export function* watchSelector() {
    yield takeLatest(actions.SUBJECT_SELECTED, selectorSaga)
}

export function* selectorUpdateSaga(action) {
    yield call(putSelector, action.payload)

}
export function* watchUpdateSelector() {
    yield takeLatest('SELECTOR_UPDATED', selectorUpdateSaga)
}

