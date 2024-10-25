import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Post } from '../components/Post';
import { Comment } from '../components/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { postSelector,fetchPost } from '../slices/post';
import { commentsSelector,fetchComments } from '../slices/comments';



const PostPage = () => {
  
  const dispatch = useDispatch() ;
  const   { post, loading:postLoading, hasErrors:posthasErrors }= useSelector(postSelector) ;
  const   { comments, loading:commentsLoading   , hasErrors:commentshasErrors }= useSelector(commentsSelector) ;
  const { id } = useParams();
  console.log("comments=>",comments)

  useEffect(() => {
    
    dispatch(fetchComments(id)) ;
    dispatch(fetchPost(id)) ;
    console.log("comments=>",comments)
  }, [dispatch])



  const renderPost = () => {
    if (postLoading) return <p> Loading posts... </p>
    if (posthasErrors) return <p> Unable to display posts. </p>
    return <Post key={post.id} post={post} />

  }

  const renderComments = () => {
    console.log("comments=>", comments)
    if (commentsLoading) return <p>Loading comments...</p>;
    if (commentshasErrors) return <p>Unable to display comments.</p>;


    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };


  return (
    <section>
      <h1>Post</h1>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
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


