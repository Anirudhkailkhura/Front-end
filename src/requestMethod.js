import axios from "axios";

const BASE_URL = "https://dhaarmik-zj46.onrender.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWFiN2RhMDM3MTk5ZTcwNjBiYzVmZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzE3ODM0OTEsImV4cCI6MTY3MjA0MjY5MX0.dcJWE5HKhsVffq8Sbl7H7rpy6rHq2yTOrfsUb8V7gKw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
