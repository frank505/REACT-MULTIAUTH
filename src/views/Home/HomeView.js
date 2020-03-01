import React from 'react'
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles'





export default function HomeView(props) {

    const classes = useStyles();

    const goToDashboardOne = () =>
    {
      props.props.history.push('/user');
    };

    const goToDashboardTwo = () =>
    {
     props.props.history.push('/admin');
    }


    return (
        <div className={classes.homeRoot}>
           
           <div className={classes.containerDiv}>

     
  <Button variant="contained" onClick={goToDashboardOne} size="large" className={classes.extraBtnStyle} color="primary">
 User 
</Button> <br/>

<Button variant="contained"  onClick={goToDashboardTwo} size="large" className={classes.extraBtnStyle} color="secondary">
 Admin
</Button>


      
    
      </div>

    </div>
    )
}
