import * as type from '../constants/actionType';

let initInfo = {} ;
const githubInfo = (state=initInfo,action) => {
    console.log('githubInfo-reducer-->',state,action)
    switch(action.type){
        case type.GET_GITHUB_INFO :
            return {...state,...action.data};
        default :
            return state;
    }
}


export default githubInfo;