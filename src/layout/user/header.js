import React,{useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles'
import {useDispatch,useSelector} from 'react-redux'
import {UserLogOutAction} from '../../store/actions/User/Auth/AuthActions'



const Header = (props) => {
   
  const classes = useStyles();
  const dispatch = useDispatch();
  const authResponse = useSelector(state => state.userAuth.authResponse);

  const logOut = ()=>{
    dispatch(UserLogOutAction());
  }
   

  useEffect(() => {
    if(authResponse!="" && authResponse.success==true)
   {
     alert(authResponse.message);
     localStorage.removeItem('user-token');
    props.props.history.push('/user/login');
   }else if(authResponse.success==false)
   {
     alert(authResponse.message);
   }
  }, [authResponse])
  




  
 

  


    return (
        <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
         

          <Typography variant="h6" noWrap className={classes.title}>
            TechBuildz
          </Typography>
     
          <Typography variant="h6" noWrap className={classes.title}>
            Welcome to the User Dashboard
          </Typography>

          <Button color="inherit" onClick={logOut}>Logout</Button>

        </Toolbar>
      </AppBar>
     
      </div>
    );
}

export default Header;
