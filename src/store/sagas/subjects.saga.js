import {takeLatest, put, call} from 'redux-saga/effects'
import * as actions from '../actions'
import { postSubject } from '../../model/subject.service';
import { putUser } from '../../model/user.service';

export function* newSubjectSaga(action){
    yield call(postSubject, action.payload.subject)
    let user = action.payload.user
    user.subjects = [...user.subjects, action.payload.subject]
    yield call(putUser, user)
}



export function* watchNewSubject(){
    yield takeLatest(actions.POST_SUBJECT, newSubjectSaga)
}