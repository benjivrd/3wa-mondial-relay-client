import axios from "axios";

export async function  searchPointRelay(data:any) {
    try{
     const response =  await axios.post("http://localhost:3300/recherche-point-relay",data,{
        headers:{
            "Content-Type":"application/json"
        }
     }) 

     if(response.status === 200)
     {
        return response
     }


    }
    catch(error:any){
        return error.response.data.messages
    }
}