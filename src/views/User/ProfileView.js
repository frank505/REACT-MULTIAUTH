import React , {useEffect}  from 'react'
import {Card} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import {loadUserAction} from '../../store/actions/User/ProfileActions'
import {useStyles} from '../../styles'
import Skeleton from '@material-ui/lab/Skeleton';

export default function ProfileView() {

    const dispatch = useDispatch();
   const classes = useStyles();
    const userProfile = useSelector(state => state.userProfile.userProfile);

    useEffect(() => {
        dispatch(loadUserAction());
    }, [dispatch])

 


    return (

        <div className={classes.fullWidthProfile}>

           <Card>
             {
                 userProfile!="" && userProfile.success==true?
                         <div>
                           <h3><b>Name: </b>{userProfile.user.name}</h3>
                           <h3><b>Email: </b>{userProfile.user.email}</h3>
                           <h3><b>Account Creation Date: </b>{userProfile.user.created_at}</h3>
                     </div>
                 :
                 userProfile.success==false ?
                 userProfile.message
                 :
                 <Skeleton variant="rect" width={210} height={118} />

             }
           </Card>
        </div>
    )
}

