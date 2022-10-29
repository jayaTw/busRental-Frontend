import {myAxios} from "./helper";

export const signupService=(user)=>{
    return myAxios.post('/Customer',user)
        .then((response)=> response.data);       // json is inside data
}

export const loginService=(user)=>{
    return myAxios.post("/login/customer",user)
    .then((response)=>response.data);
}