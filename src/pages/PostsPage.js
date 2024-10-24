import React, { useEffect }  from 'react' ;
import { connect } from 'react-redux' ;

// Bring in the asynchronous fetchPosts action
import { Post } from '../components/Post'

import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from '../slices/posts'


const PostsPage = () => {
   
  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

      useEffect(() => {
        dispatch(fetchPosts())
      }, [dispatch])


      const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map((post) => <Post key={post.id} post={post} />)
      }


  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  })
  // Connect Redux to React
export default connect(mapStateToProps)(PostsPage)


