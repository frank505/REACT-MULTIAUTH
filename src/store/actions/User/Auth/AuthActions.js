import {LoginUser,SignUpService,LogoutUser} from '../../../../services/User/AuthService'






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


export const UserLoginAction = (credentials,props) =>
{
    

 return (dispatch)=>{


    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
     LoginUser(credentials).then((res)=>{
         console.log(res.token);
        if(res.success==true && res.hasOwnProperty('token')){
            console.log('ready to login user with '+res.token)
            localStorage.setItem('user-token','Bearer '+res.token);
            dispatch({type:'LOGIN_SUCCESS'});
            setTimeout(() => {
                console.log(props)
                props.history.push("/user");  
                dispatch({type:'RESTART_AUTH_RESPONSE'}); 
            }, 1500);
            
        }else if(res.success==false){
            dispatch({type:'LOGIN_ERROR',res})
        }
           
    },
    error=>{
        dispatch({type:'CODE_ERROR',error});
        console.log(error)
    }
    
     )
 }   
}


export const UserLogOutAction = () =>
{
    

 return (dispatch)=>{


    dispatch({type:'RESTART_AUTH_RESPONSE'});
     LogoutUser().then((res)=>{
         console.log(res);
        if(res.success==true){
            dispatch({type:'LOGOUT_SUCCESS',res});

        }else if(res.success==false){
            dispatch({type:'LOGOUT_ERROR',res})

        }

           
    },
    error=>{
        dispatch({type:'CODE_ERROR',error});
        console.log(error)
    }
    
     )
 }   
}


export const clearUserAuthState = () =>
{
    return (dispatch) =>
    {
        dispatch({type:'RESTART_AUTH_RESPONSE'});
    }
  
}


