import {combineReducers} from 'redux'
import subjectReducer from './subjects.reducer'
import userReducer from './user.reducer'
import selectorReducer from './selector.reducer';
import scalesReducer from './scales.reducer';
import boxSelectReducer from './boxSelect.reducer';
import subjectSelectReducer from './subjectSelect.reducer';
import subjectCreateReducer from './subjectCreate.reducer';

const rootReducer = combineReducers({
    subjects: subjectReducer,
    user: userReducer,
    selector: selectorReducer,
    scales: scalesReducer,
    boxSelected: boxSelectReducer,
    subjectSelected: subjectSelectReducer,
    subjectCreate: subjectCreateReducer
})

export default rootReducer