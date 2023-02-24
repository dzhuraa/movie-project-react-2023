import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    // create: (data) => axiosService.post(urls.movies, data),
    // updateById: (id, data) => axiosService.put(urls.byId(id), data),
    // deleteById: (id) => axiosService.delete(urls.byId(id))
}

export{
    movieService
}