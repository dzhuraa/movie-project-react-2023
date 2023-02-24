import {createSlice} from "@reduxjs/toolkit";

const initialState={
    movies: [],
    prev: null,
    next: null,
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
    },
    extraReducers: builder =>
        builder
            .addCase(getAll, (state, action) => {
                const {prev, next, items} = action.payload;
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});

const {reducer: movieReducer, actions: {getAll}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieActions,
    movieReducer
};