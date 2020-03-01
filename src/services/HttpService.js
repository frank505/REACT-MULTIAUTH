class HttpService{
    url = "http://localhost:8000";
    
    
    postData = async(item ,added_url,tokenId="") =>{
    const token = await localStorage.getItem(tokenId);
    let requestOptions = {
        method:'POST',
        headers:{'Authorization':token,
         'Content-type':'Application/json',
    },
    
    body:JSON.stringify(item)
    
    }
    
    return fetch(this.url+"/"+added_url, requestOptions).then(
        response=>response.json());
    }
    
    
    getData = async(added_url,tokenId="") =>{
        const token = await localStorage.getItem(tokenId);
        let requestOptions = {
            method:'GET',
            headers:{
                'Authorization':token,
             'Content-type':'application/json',
        }
        }
        
        return fetch(this.url+"/"+added_url, requestOptions).then(
            response=>response.json());
    }
    
    
    
    }
    
    
    export default HttpService;
    
    
    
    
    
    
    
    
    