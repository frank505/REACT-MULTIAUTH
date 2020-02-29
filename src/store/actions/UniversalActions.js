export const restartAuthResponseAndShowLoader = () =>
{
    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
}
