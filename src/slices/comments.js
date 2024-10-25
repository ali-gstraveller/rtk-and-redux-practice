import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    comments: [],
}


// A slice for posts with our three reducers
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getComments: (state) => {
            state.loading = true  
        },
        getCommentsSuccess: (state, { payload }) => {
            state.comments = payload
            state.loading = false
            state.hasErrors = false
        },
        getCommentsFailure: (state) => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

// Three actions generated from the slice
export const { getComments, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions

// A selector
export const commentsSelector = (state) => state.comments;

// The reducer
export default commentsSlice.reducer

// Asynchronous thunk action
export function fetchComments(id) {
  return async (dispatch) => {
    dispatch(getComments())

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      const data = await response.json();
      console.log(data);
      dispatch(getCommentsSuccess(data))
    } catch (error) {
      dispatch(getCommentsFailure())
    }
  }
}


