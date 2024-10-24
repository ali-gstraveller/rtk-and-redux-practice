import { combineReducers } from 'redux' ;
import postsSlice from './posts' ;


const rootReducer = combineReducers({
  posts: postsSlice,
})

export default rootReducer