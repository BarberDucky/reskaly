import {combineReducers} from 'redux'
import subjectReducer from './subjects.reducer'
import userReducer from './user.reducer'
import selectorReducer from './selector.reducer';
import scalesReducer from './scales.reducer';
import boxSelectReducer from './boxSelect.reducer';
import subjectSelectReducer from './subjectSelect.reducer';
import subjectCreateReducer from './subjectCreate.reducer';
import cellSelectReducer from './cellSelect.reducer';
import pageReducer from './page.reducer';

const rootReducer = combineReducers({
    subjects: subjectReducer,
    user: userReducer,
    selector: selectorReducer,
    scales: scalesReducer,
    boxSelected: boxSelectReducer,
    subjectSelected: subjectSelectReducer,
    subjectCreate: subjectCreateReducer,
    cellSelected: cellSelectReducer,
    page: pageReducer
})

export default rootReducer