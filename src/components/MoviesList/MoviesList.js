import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieService} from "../../services";
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    useEffect(() => {
        movieService.getAll().then(({data}) => dispatch(movieActions.getAll(data)))
    }, []);
    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};