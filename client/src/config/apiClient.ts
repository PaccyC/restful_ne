import axios from "axios";


export const apiClient =  axios.create({
    baseURL: "/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})


export const protectedApiClient = axios.create({
    baseURL: "/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
    }
})

