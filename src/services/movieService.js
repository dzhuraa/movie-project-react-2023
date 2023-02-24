import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    create: (data) => axiosService.post(urls.movies, data)
}

export{
    movieService
}