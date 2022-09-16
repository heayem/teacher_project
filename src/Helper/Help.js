import axios from 'axios';

export const config = {
    baseUrl:"https://demo-intern.cleverapps.io/"
}
export const fetchdata=(url="",data={},method="")=>{
    const token = localStorage.getItem("accessToken")
    return axios({
        url:config.baseUrl+url,
        data:data,
        method:method,
        headers : {
            Authorization: `Bearer ${token}`
        }
    }).then(res=>{
        return res.data
    }).catch(err=>{
        return err
        
    })
    
}