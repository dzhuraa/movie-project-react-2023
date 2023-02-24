const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie'

const urls = {
    movies,
    byId: (id) => `${movies}/${id}`
}
export{
    baseURL,
    urls
}