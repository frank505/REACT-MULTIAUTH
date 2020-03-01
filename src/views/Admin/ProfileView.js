import React , {useEffect}  from 'react'
import {Card} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import {loadAdminAction} from '../../store/actions/Admin/ProfileActions'
import {useStyles} from '../../styles'
import Skeleton from '@material-ui/lab/Skeleton';

export default function ProfileView() {

    const dispatch = useDispatch();
   const classes = useStyles();
    const adminProfile = useSelector(state => state.adminProfile.adminProfile);

    useEffect(() => {
        dispatch(loadAdminAction());
    }, [dispatch])

 



    return (

        <div className={classes.fullWidthProfile}>

           <Card>
             {
                 adminProfile!="" && adminProfile.success==true?
                         <div>
                           <h3><b>Name: </b>{adminProfile.admin.name}</h3>
                           <h3><b>Email: </b>{adminProfile.admin.email}</h3>
                           <h3><b>Account Creation Date: </b>{adminProfile.admin.created_at}</h3>
                     </div>
                 :
                 adminProfile.success==false ?
                 adminProfile.message
                 :
                 <Skeleton variant="rect" width={210} height={118} />

             }
           </Card>
        </div>
    )
}


