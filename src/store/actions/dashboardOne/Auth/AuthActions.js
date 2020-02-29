import {LoginUser,SignUpService} from '../../../../services/DashboardOne/AuthService'
import {restartAuthResponseAndShowLoaderActions,
        signUpResponseActions,
        loginResponseActions} from '../../UniversalActions'




export const signUpAction = (credentials) =>{
    console.log(credentials);
    return (dispatch)=>{
        
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});

        SignUpService(credentials).then((res)=>{
            
            if(res.hasOwnProperty('success') && res.success==true){

                dispatch({type:'SIGNUP_SUCCESS',res});
                
            }else if(res.hasOwnProperty('success') && res.success==false) { 
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
    
}


export const UserLoginAction = (credentials,history) =>
{
    

 return (dispatch)=>{

    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
    
     LoginUser(credentials,history).then((res)=>{
        const redirectTo = "/dashboard-one";
        const tokenId = "dashboardOne";
       loginResponseActions(res,redirectTo,tokenId,history);       
    },
    error=>{
        dispatch({type:'CODE_ERROR',error});
        console.log(error)
    }
    
     )
 }   
}



