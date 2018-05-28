import {getSelector, getScales, putSelector} from '../../model/selector.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';
import {watchScales} from './scales.saga'
import {watchSelector, watchBoxAdd, watchBoxDelete} from './selector.saga'
import { watchAuthSaga } from './auth.saga';
import { watchRegSaga } from './reg.saga';
import { watchNewSubject, watchRemoveSubject } from './subjects.saga';

export default function* root() {
    yield all([
        fork(watchScales),
        fork(watchSelector),
        fork(watchBoxAdd),
        fork(watchBoxDelete),
        fork(watchAuthSaga),
        fork(watchRegSaga),
        fork(watchNewSubject),
        fork(watchRemoveSubject)
    ])
}