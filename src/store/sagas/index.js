import {all, fork} from 'redux-saga/effects'
import {watchScales, watchScaleAdd, watchScaleDelete, watchCellAdd, watchCellDelete} from './scales.saga'
import {watchSelector, watchBoxAdd, watchBoxDelete, watchBoxUpdate} from './selector.saga'
import { watchAuthSaga } from './auth.saga';
import { watchRegSaga } from './reg.saga';
import { watchNewSubject, watchRemoveSubject } from './subjects.saga';
import { watchCellSubmit } from './user.saga';

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
        fork(watchRemoveSubject),
        fork(watchScaleAdd),
        fork(watchScaleDelete),
        fork(watchCellAdd),
        fork(watchCellDelete),
        fork(watchCellSubmit)
    ])
}