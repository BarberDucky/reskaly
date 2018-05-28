import {takeLatest, call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import { postSubject, deleteSubject, getSubjects } from '../../model/subject.service';
import { putUser } from '../../model/user.service';
import { postScales, deleteScales } from '../../model/scales.service';
import { postSelector, deleteSelector } from '../../model/selector.service';

export function* newSubjectSaga(action){
    if (action.payload.isModerator) {
        yield call(postSubject, action.payload.subject)
        yield call(postScales, action.payload.subject.id)
        yield call(postSelector, action.payload.subject.id)
        let user = action.payload.user
        user.subjects = [...user.subjects, action.payload.subject]
        yield call(putUser, user)
        yield put(actions.postSubjectResolve(action.payload.subject))
    } else {
        const data = yield call(getSubjects, action.payload.subject.id)
        console.log('data iz geta', data)
        if (data) {
            let user = action.payload.user
            user.subjects = [...user.subjects, action.payload.subject]
            yield call(putUser, user)
            yield put(actions.postSubjectResolve(action.payload.subject))
        } else {
            alert('predmet ne postoji')
        }
    }
    
    //yield put(actions.updateUser, user)
}

export function* removeSubjectSaga(action){
    yield call(deleteSubject, action.payload.subject)
    let user = action.payload.user
    user.subjects = user.subjects.filter(element => element.id !== action.payload.subject.id)
    yield call(putUser, user)
    yield call(deleteScales, action.payload.subject.id)
    yield call(deleteSelector, action.payload.subject.id)
    //yield put(actions.updateUser, user)
}



export function* watchNewSubject(){
    yield takeLatest(actions.POST_SUBJECT, newSubjectSaga)
}

export function* watchRemoveSubject() {
    yield takeLatest(actions.DELETE_SUBJECT, removeSubjectSaga)
}