import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const PF = "http://localhost:9000/images/"; // para imagen

    return (
        <div className='post'>
            {
                post.photo && (
                    <img
                        className='postImg'
                        src={PF + post.photo}
                        alt=""
                    />
                )
            }
            <div className='postInfo'>
                <div className='postCats'>
                    {
                        post.categories.map((cate, index) => (
                            <span className='postCat' key={index}>{cate.name}</span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className='postTitle'>
                        { post.title }
                    </span>
                </Link>
                <hr />
                <span className='postDate'>{ new Date(post.createdAt).toDateString() }</span>
            </div>
            <p className='postDesc'>
                { post.desc }
            </p>
        </div>
    )
}

export default Post