import * as type from '../constants/actionType'
import axios from 'axios';

export const getInfo = () => (dispatch, getState)=>{
    console.log('异步action-->',dispatch,getState)
    axios.get('https://api.github.com/users/zhaozhuoboy')
        .then(res=>{
            console.log('res-->', res)
            dispatch({
                type: type.GET_GITHUB_INFO,
                data: res.data
            })
        })
    
}
