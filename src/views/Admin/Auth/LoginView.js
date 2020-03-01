import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStyles} from '../../../styles'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom';
import {useFormFields} from '../../../helpers/hooksFormInput'
import {useDispatch, useSelector} from 'react-redux';
import {AdminLoginAction,clearAdminAuthState} from '../../../store/actions/Admin/Auth/AuthActions'
import {displayErrorMessages} from '../../../helpers/displayErr'


export default function LoginView(props) {


  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  const authResponse = useSelector(state => state.adminAuth.authResponse);



  useEffect(() => {
    dispatch(clearAdminAuthState())
  },
  [])

    const AdminLogin = (e) =>
  {
    e.preventDefault();

    clearAuthErrDiv();
    
   dispatch(AdminLoginAction(fields,props.props))
  } 

  const clearAuthErrDiv = () =>
  {
    let authErr = document.querySelector("#authErr");
    authErr.innerHTML = "";
  }

  const successMessage = (successMessage) =>
  {
  return     <div dangerouslySetInnerHTML=
   {{ __html: '<div class="alert alert-success add-padding">'+' '+successMessage+'</div>' }} 
   /> 
  }

    return (
        <div>
       
       <div className={classes.centerItem}>

       <Card>
          
          <h2><b>Welcome to Admin Login</b></h2>


          <div id="authErr"></div>

<div id="authResponse"  className={classes.authResponse}>

    {
      /**
       * if authResponse.success is true show success message
       */
    authResponse!="" && authResponse.success==true? 
    successMessage(authResponse.message)
    /**
     * else if authResponse.success == false show error messages
     */
       : 
      authResponse.success==false ?
      displayErrorMessages(authResponse.error,document.getElementById('authErr')) 
      : authResponse

    }


</div>
  
            <form   onSubmit={AdminLogin}> 

           
           

           <div>
           <TextField
          type="email"
          className={classes.fullWidth}
          required
          margin="normal"
          variant="outlined"
          label="email"
          id="email"
          value = {fields.email}
          onChange = {handleFieldChange}
        />
           </div>


          <div>

              <div>

              <TextField
            className={classes.fullWidth}
          label="Password"
          type="password"
          required
          margin="normal"
          variant="outlined"
          required
          id="password"
          value = {fields.password}
          onChange = {handleFieldChange}
        />
         
              </div>


              <div>
              <Button type="submit" className={classes.fullWidth}
             
        variant="contained"
        color="primary"
     endIcon={<AccountCircleIcon/>}
      >
        <b>Login</b>  
      </Button><br/>

      <div className={classes.linkContainer}>
          <Link  to="/admin/register">Register Here</Link>
          </div>
          

          <div className={classes.linkContainer}>
          <Link  to="/home">Back To Home Page </Link>
          </div>
          
              </div>
            
            
             
            <div>
                
            </div>


           </div>  
        
      

            </form>

            </Card>
     
            </div>
        
        </div>
    )
}
