const initState = {
    userProfile:""
    }
     

    const UserProfileReducer = (state=initState, action) =>{
        switch(action.type){
            
                case 'LOADING':
                    return {
                        ...state,
                        userProfile:'loading'
                    }

          case 'LOAD_PROFILE_SUCCESS':
              console.log(action)
              return {
                  ...state,
                  userProfile:action.res,
              }
    
              case 'LOAD_PROFILE_ERROR':
                    console.log(action)

                    return {
                        ...state,
                        userProfile:action.res,
                    }
    
                    case 'CODE_ERROR':
                            console.log(action)
                            return {
                                ...state,
                                userProfile:'there seems to be a problem please refresh your browser',
                            }
                            
    
                default:
                    return state
    
        }
    }
    
    export default UserProfileReducer;
