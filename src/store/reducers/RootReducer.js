import {combineReducers} from 'redux'
import UserAuthReducer from '../reducers/User/Auth/AuthReducer'
import UserProfileReducer  from '../reducers/User/ProfileReducer'
import AdminAuthReducer from '../reducers/Admin/Auth/AuthReducer'
import AdminProfileReducer from '../reducers/Admin/ProfileReducer'

const RootReducer = combineReducers({
  userAuth:UserAuthReducer,
  userProfile: UserProfileReducer,
  adminAuth:AdminAuthReducer,
  adminProfile:AdminProfileReducer
})

export default RootReducer

