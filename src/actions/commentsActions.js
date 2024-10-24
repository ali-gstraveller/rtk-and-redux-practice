// Create Redux action types
export const GET_COMMENT = 'GET_COMMENT'
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS'
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE'

// Create Redux action creators that return an action
export const getComment = () => ({
    type: GET_COMMENT,
  })
  
  export const getCommentSuccess = (comments) => ({
    type: GET_COMMENT_SUCCESS,
    payload: comments,
  })
  
  export const getCommentFailure = () => ({
    type: GET_COMMENT_FAILURE,
  })

// Combine them all in an asynchronous thunk
export function fetchComments(id) {
   
    return async (dispatch) => {
      dispatch(getComment())
  
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const data = await response.json()
  
        dispatch(getCommentSuccess(data))
      } catch (error) {
        dispatch(getCommentFailure())
        console.log('error  in comments =>', error)
      }
    }
  }

