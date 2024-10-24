import React from 'react';
import { Link } from 'react-router-dom'; 

export const Post = ({ post }) => (
  <article className="post-excerpt">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <Link to={`/posts/${post.id}`} className="button">
        View Post
    </Link>
  </article>
)