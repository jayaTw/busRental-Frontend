import axios from "axios";

export const BASE_URL='http://127.0.0.1:8000';

export const myAxios=axios.create({            // create object & passing base url
    baseURL:BASE_URL
})


// OR export default axios.create({baseURL:BASE_URL})