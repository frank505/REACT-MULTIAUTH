import React,{useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles'
import {useDispatch,useSelector} from 'react-redux'
import {AdminLogOutAction } from '../../store/actions/Admin/Auth/AuthActions'



const Header = (props) => {
   
  const classes = useStyles();
  const dispatch = useDispatch();
  const authResponse = useSelector(state => state.adminAuth.authResponse);

  const logOut = ()=>{
    dispatch(AdminLogOutAction());
  }
   

  useEffect(() => {
    if(authResponse!="" && authResponse.success==true)
   {
     alert(authResponse.message);
     localStorage.removeItem('admin-token');
    props.props.history.push('/admin/login');
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
            Welcome to the Admin Dashboard
          </Typography>

          <Button color="inherit" onClick={logOut}>Logout</Button>

        </Toolbar>
      </AppBar>
     
      </div>
    );
}

export default Header;
