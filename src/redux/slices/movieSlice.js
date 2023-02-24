import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movies: [],
    prev: null,
    next: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
// const getAll = createAsyncThunk(
//     'movieSlice/getAll',
//     async ({page}, thunkAPI) => {
//         try {
//             const {data:{results}} = await movieService.getAll(page);
//             return results;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );
// const create = createAsyncThunk(
//     'movieSlice/create',
//     async ({movie}, thunkAPI) => {
//         try{
//             await movieService.create(movie);
//             thunkAPI.dispatch(getAll({page: 1}));
//         }catch (e) {
//             return thunkAPI.rejectWithValue((e.response.data));
//         }
//     }
// )
// const deleteById = createAsyncThunk(
//     'movieSlice/deleteById',
//     async ({id}, thunkAPI) => {
//         try {
//             await movieService.deleteById(id)
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )
//
// const updateById = createAsyncThunk(
//     'movieSlice/updateById',
//     async ({id, movie}, thunkAPI) => {
//         try {
//             await movieService.updateById(id, movie);
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovieForUpdate: (state, action) => {
            state.movieForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload;
                state.movies = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});

const {reducer: movieReducer, actions: {setMovieForUpdate}} = movieSlice;


const movieActions = {
    getAll,
    // create,
    // deleteById,
    // updateById,
    setMovieForUpdate
}

export {
    movieReducer,
    movieActions
};