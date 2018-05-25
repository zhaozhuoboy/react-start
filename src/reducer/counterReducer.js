import * as type from '../constants/actionType';

const initState = 0;

export const conter = (state=initState , action) => {
    console.log('conterReducer--->',state,action)
    switch(action.type){
        case type.ADD :
            return state + 1;
        case type.JIAN :
            return state - 1;
        default :
            return state;
    }
}