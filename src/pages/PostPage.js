import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import { Post } from '../components/Post';
import { fetchPost } from '../actions/postActions' ;
import { Comment } from '../components/Comment'
import { fetchComments } from '../actions/commentsActions';
import { useDispatch, useSelector } from 'react-redux'
import { postSelector } from '../slices/post'



const PostPage = () => {
  
  const dispatch = useDispatch() ;
  const { post, loading : postLoading , hasErrors : postHasErrors } = useSelector(postSelector) ;
  const { id } = useParams() ;
  
  useEffect(() => {
    // const { id } = match.params;
    // console.log('  match=> ', id )
    dispatch(fetchPost(id)) ;
    // dispatch(fetchComments(id)) ;
  }, [dispatch])



  const renderPost = () => {
    console.log(hasErrors)
    if (loading) return <p> Loading posts... </p>
    if (hasErrors) return <p> Unable to display posts. </p>
    return <Post key={post.id} post={post} />

  }

  // const renderComments = () => {
  //   console.log("comments=>", comments)
  //   if (loading.comments) return <p>Loading comments...</p>;
  //   if (hasErrors.comments) return <p>Unable to display comments.</p>;


  //   return comments.map((comment) => (
  //     <Comment key={comment.id} comment={comment} />
  //   ));
  // };


  return (
    <section>
      <h1>Post</h1>
      {renderPost()}
      {/* <h2>Comments</h2>
      {renderComments()} */}
    </section>
  )
}

// Map Redux state to React component props
// const mapStateToProps = (state) => ({

//   loading: { post: state.post.loading, comments: state.comments.loading },
//     post: state.post.post,
//     hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
//     comments:state.comments.comments
//   }
// )


  // Connect Redux to React
export default PostPage


