import HttpService from '../HttpService';



export const SignUpService = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "user/register";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
         });
}

export const LoginUser = (credentials) =>{
    const http = new HttpService();
    let signUpUrl = "user/login";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
    });
}

export const LogoutUser = () =>{
    const http = new HttpService();
    let logoutUrl = "user/logout";
    const tokenId = "user-token";
    return http.getData(logoutUrl,tokenId).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
    });
}