import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTYyNTE4NDZmMGY1NmFhYWE4ZTYyYWE0YjE0NWIyNyIsInN1YiI6IjYzZjMzNmI4MTUzNzZjMDA4YmMwZGYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAEl0JWwIrM0ZBmv8XutgzCNrq04VikDIqyFvih3JBU'
axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config;
})
export {
    axiosService
}