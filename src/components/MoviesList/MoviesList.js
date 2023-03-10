import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

// import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query]);
    console.log(movies);
    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page: +query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page: +query.get('page')+1}))}>next</button>
            </div>
            {/*{movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}*/}
        </div>
    );
};

export {MoviesList};