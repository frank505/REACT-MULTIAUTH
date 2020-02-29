import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useStyles} from './styles'




export default function HomeView(props) {

    const classes = useStyles();

    const goToDashboardOne = () =>
    {
      props.props.history.push('/dashboard-one');
    };

    const goToDashboardTwo = () =>
    {
     props.props.history.push('/dashboard-two');
    }


    return (
        <div className={classes.homeRoot}>
           
           <div className={classes.containerDiv}>

     
  <Button variant="contained" onClick={goToDashboardOne} size="large" className={classes.extraBtnStyle} color="primary">
  Dashboard 1
</Button> <br/>

<Button variant="contained"  onClick={goToDashboardTwo} size="large" className={classes.extraBtnStyle} color="secondary">
  Dashboard 2
</Button>


      
    
      </div>

    </div>
    )
}
