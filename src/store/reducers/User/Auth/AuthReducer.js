const initState = {
    authResponse:""
    }
     

    const UserAuthReducer = (state=initState, action) =>{
        switch(action.type){
            case 'RESTART_AUTH_RESPONSE':
                return {
                    ...state,
                    authResponse:""
                }
                case 'LOADING':
                    return {
                        ...state,
                        authResponse:'loading...'
                    }

          case 'SIGNUP_SUCCESS':
              console.log(action)
              return {
                  ...state,
                  authResponse:action.res,
              }
    
              case 'SIGNUP_ERROR':
                    console.log(action)

                    return {
                        ...state,
                        authResponse:action.res,
                    }
    
                    case 'CODE_ERROR':
                            console.log(action)
                            return {
                                ...state,
                                authResponse:'there seems to be a problem please refresh your browser',
                            }
                            case 'LOGIN_SUCCESS':
                                console.log(action)
                                return {
                                    ...state,
                                    authResponse:'redirecting you to dashboard..',
                                }
                                case 'LOGIN_ERROR':
                                    console.log(action)
                                    return {
                                        ...state,
                                        authResponse:action.res,
                                    }
                                    case 'LOGOUT_SUCCESS':
                                        console.log(action)
                                        return {
                                            ...state,
                                            authResponse:action.res,
                                        }
                                        case 'LOGOUT_ERROR':
                                            console.log(action)
                                            return {
                                                ...state,
                                                authResponse:action.res,
                                            }
    
                default:
                    return state
    
        }
    }
    
    export default UserAuthReducer;
