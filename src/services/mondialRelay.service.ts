import axios from "axios";
import { searchData } from "../types/relay";

export async function  searchPointRelay(data:searchData) {
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