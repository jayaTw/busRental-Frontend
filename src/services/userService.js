import { useState } from "react";
import {myAxios} from "./helper";

export const SignupService=(user)=>{
    return myAxios.post('/Customer',user)
        .then((response)=> response.data);       // json is inside data
}

export const LoginService=(user)=>{
   
    return myAxios.post("/login/customer",user)
    .then((response)=>response.data);
    
}
