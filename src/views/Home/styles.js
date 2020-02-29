import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    homeRoot: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    containerDiv: {
      flex:'auto',
      position: 'fixed',
      top: '40%',
      left: '45%',
    },
    extraBtnStyle:{
      marginTop:'10px'
    }
  }));

