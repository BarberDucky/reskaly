import {call, put, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions'
import { putUser } from '../../model/user.service';

export function* cellSubmitSaga(action){
    console.log('submit', action.payload)
    let user = action.payload.user
    user = {
        id: user.id,
        isModerator: user.isModerator,
        password: user.password,
        subjects: user.subjects.map(subject => {
            if (subject.id === action.payload.selectedSubject) {
                return {
                    id: subject.id,
                    points: subject.points.map(point => {
                        if (point.name === action.payload.cell.name) {
                            return action.payload.cell
                        } else {
                            return point
                        }
                    })   
                }
            } else {
                return subject
            }
        })
    }
    console.log('after change', user)
    yield call(putUser, user)
    yield put(actions.updateUser(user))
}

export function* watchCellSubmit() {
    yield takeLatest(actions.CELL_SUBMIT, cellSubmitSaga)
}