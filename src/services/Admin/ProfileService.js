import HttpService from '../HttpService';



export const LoadAdminProfile = () =>{
    const http = new HttpService();
    let signUpUrl = "admin/view-profile";
    const tokenId = "admin-token";
   
    return http.getData(signUpUrl,tokenId).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {
        console.log(error)
        return error; 
         });
}



