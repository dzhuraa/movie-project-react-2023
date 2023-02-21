import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAll:()=>axiosService.get(urls.movies),
    getById:(id)=>axiosService.get(`${urls.movies}/${id}`)
}

export{
    movieService
}