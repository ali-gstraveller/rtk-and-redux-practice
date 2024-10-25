import { combineReducers } from 'redux' ;
import postsSlice from './posts' ;
import postSlice from './post'
import comments from './comments';
import commentsSlice from './comments';
 

const rootReducer = combineReducers({
  posts: postsSlice,
  post:postSlice,
  comments:commentsSlice
})

export default rootReducer