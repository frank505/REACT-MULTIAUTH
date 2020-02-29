import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function LoginView() {

    const UserLogin = () =>
  {
   console.log('user login begins here')
  } 

    return (
        <div>
            <form style={{marginBottom:'20px'}} onSubmit={UserLogin}> 
           
           <div>
           <TextField
          type="email"
          style={{width:'80%',marginLeft:'7%'}}
          required
          margin="normal"
          variant="outlined"
          label="email"
        />
           </div>


          <div>

              <div>

              <TextField
              style={{width:'80%',marginLeft:'7%'}}
          label="Password"
          type="password"
          required
          margin="normal"
          variant="outlined"
          required
        />
         
              </div>


              <div>
              <Button type="submit" className="user-login"
              style={{width:'80%',marginLeft:'7%'}}
        variant="contained"
        color="primary"
     endIcon={<AccountCircleIcon/>}
      >
        <b>Login</b>  
      </Button>
          
              </div>
            
             
            <div>
                
            </div>


           </div>  
        
        


            </form>
        </div>
    )
}
