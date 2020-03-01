import {Alert} from '@material-ui/lab';


export const errorMessage = (dataObject) =>{
    let str='';
  
    for(var objects in dataObject){
        if(typeof dataObject[objects][0] == 'string'){
            str+='<div class="alert alert-danger add-padding">'+' ' + dataObject[objects][0]+'</div>';
        }else{
            str+= '<div class="alert alert-danger add-padding">'+ ' ' + (dataObject[objects][0]+'</div>');
        }
    }
  
    return str;
  }


export const displayErrorMessages = (errorResponse,displayErr) =>
{
  if(typeof errorResponse == 'string'){
    displayErr.innerHTML = '<div class="alert alert-danger add-padding">'+errorResponse+'</div>';
    return;
  }else
  {
    const lengthErrObject = Object.keys(errorResponse).length;
    if(lengthErrObject > 0)
    {
      const err = errorMessage(errorResponse);
      displayErr.innerHTML = err;
    }
  }

}