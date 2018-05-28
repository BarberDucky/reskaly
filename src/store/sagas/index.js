import {all, fork} from 'redux-saga/effects'
import {watchScales} from './scales.saga'
import {watchSelector, watchBoxAdd, watchBoxDelete, watchBoxUpdate} from './selector.saga'
import { watchAuthSaga } from './auth.saga';
import { watchRegSaga } from './reg.saga';
import { watchNewSubject, watchRemoveSubject } from './subjects.saga';

export default function* root() {
    yield all([
        fork(watchScales),
        fork(watchSelector),
        fork(watchBoxAdd),
        fork(watchBoxDelete),
        fork(watchBoxUpdate),
        fork(watchAuthSaga),
        fork(watchRegSaga),
        fork(watchNewSubject),
        fork(watchRemoveSubject)
    ])
}