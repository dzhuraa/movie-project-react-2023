import {createSlice} from "@reduxjs/toolkit";

const initialState={
    movies: [],
    errors: null,
    loading: null
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        }
    }
});

const {reducer: movieReducer, actions: {getAll}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieActions,
    movieReducer
};