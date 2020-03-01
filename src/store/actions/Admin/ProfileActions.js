
import {LoadAdminProfile} from '../../../services/Admin/ProfileService'


export const loadAdminAction = () =>{
    return (dispatch)=>{
        
        dispatch({type:'LOADING'});

        LoadAdminProfile().then((res)=>{
            
            if(res.hasOwnProperty('success') && res.success==true){
                 
                dispatch({type:'LOAD_PROFILE_SUCCESS',res});
                
            }else if(res.hasOwnProperty('success') && res.success==false) { 
                dispatch({type:'LOAD_PROFILE_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
    
}