export const restartAuthResponseAndShowLoaderActions = () =>
{
    return (dispatch)=>{
    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
    }
}


export const signUpResponseActions = (res) =>
{
    return (dispatch)=>{
    if(res.hasOwnProperty('success') && res.success==true){

        dispatch({type:'SIGNUP_SUCCESS',res});
        
    }else if(res.hasOwnProperty('success') && res.success==false) { 
        dispatch({type:'SIGNUP_ERROR',res})
    }
}
}


export const loginResponseActions = (res,redirectTo,tokenId,history) =>
{
    return (dispatch)=>{
    if(res.success==true && res.hasOwnProperty('token')){
        localStorage.setItem(tokenId,'Bearer '+res.token);
        dispatch({type:'LOGIN_SUCCESS'});
        setTimeout(() => {
            history.push(redirectTo);     
        }, 3000);
        
    }else if(res.success==false){
        dispatch({type:'LOGIN_ERROR',res})
    }
}
}

