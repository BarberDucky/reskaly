import {getSelector, getScales, putSelector} from '../../model/selector.service'
import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import { selectorLoaded, scalesLoaded, selectorUpdated } from '../actions';
import {watchScales} from './scales.saga'
import {watchUpdateSelector, watchSelector} from './selector.saga'
import { watchAuthSaga } from './auth.saga';

export default function* root() {
    yield all([
        fork(watchScales),
        fork(watchSelector),
        fork(watchUpdateSelector),
        fork(watchAuthSaga)
    ])
}