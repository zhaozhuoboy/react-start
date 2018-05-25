import { combineReducers} from 'redux';

import { conter } from './counterReducer';
import githubInfo from './getInfoReducer'

export default combineReducers({
    conter,
    githubInfo
})