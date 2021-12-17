import React from 'react';
import './Comments.css';

const Comments = ({ comment }) => {
    console.log('Comment')
    return (
        <p className='comments'>
            <b>{comment.username}</b>
            {comment.body}
        </p>
    )
}

export default Comments;