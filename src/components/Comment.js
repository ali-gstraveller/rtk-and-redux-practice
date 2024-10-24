import React from 'react'

export const Comment = ({ comment }) => (
  <article className="post-excerpt">
    <h2> {comment.name} </h2>
    <h4>   {comment.email}  </h4>
    <p>{comment.body.substring(0, 100)}</p>
  </article>
)