import {
    all,
    call,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    getUser
} from '../../model/user.service';
import {
    authSucc, authFail
} from '../actions';

export function* authSaga(action) {
    const data = yield call(getUser, action.payload.username)
    if (data.password === action.payload.password) {
        yield put(authSucc(data))
        alert('success')
    } else {
        yield put(authFail(data))
        alert('fail')
    }
}


export function* watchAuthSaga() {
    yield takeLatest('AUTH_REQ', authSaga)
}