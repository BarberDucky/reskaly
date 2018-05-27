import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    postUser
} from '../../model/user.service';
import {
    regSucc, regFail
} from '../actions';

export function* regSaga(action) {
    const data = yield call(postUser, action.payload.username, action.payload.password, action.payload.isModerator)
    if (data) {
        yield put(regSucc())
        alert('success')
    } else {
        yield put(regFail())
        alert('fail')
    }
}

export function* watchRegSaga() {
    yield takeLatest('REG_REQ', regSaga)
}