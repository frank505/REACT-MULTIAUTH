import {LoginUser,SignUpService} from '../../../../services/DashboardOne/AuthService'
import {restartAuthResponseAndShowLoader} from '../../UniversalActions'

export const signUp = (credentials) =>{
    console.log(credentials);
    return (dispatch)=>{
        
       restartAuthResponseAndShowLoader();

        SignUpService(credentials).then((res)=>{
            console.log(res);
            if(res.hasOwnProperty('success')){

                dispatch({type:'SIGNUP_SUCCESS',res});
                
            }else{
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
    
}


export const UserLogin = (credentials,history) =>
{
    

 return (dispatch)=>{

     restartAuthResponseAndShowLoader();
    
     LoginUser(credentials,history).then((res)=>{
         console.log(res);
         if(res.success==true && res.hasOwnProperty('token')){
            localStorage.setItem("dashboardOne",'Bearer '+res.token);
            dispatch({type:'LOGIN_SUCCESS'});
            setTimeout(() => {
                history.push("/");     
            }, 3000);
            
        }else{
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



