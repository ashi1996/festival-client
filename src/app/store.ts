import { configureStore } from '@reduxjs/toolkit'
import festivalsReducer from '../features/festivals/festivalsSlice'


export const store = configureStore({
    reducer:{
        festivals: festivalsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch