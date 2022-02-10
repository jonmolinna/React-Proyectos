import React from 'react'
import './SinglePost.css';

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className='singlePostImg'
                    src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
                    alt=""
                />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet.
                    <div className='singlePostEdit'>
                        <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: <b>Safak</b>
                    </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere tempore ducimus dolorum laborum recusandae,
                    inventore vitae nihil aliquid possimus perspiciatis
                    velit dolor, eius et consequatur. Beatae nemo impedit
                    praesentium nisi.
                </p>
            </div>
        </div>
    )
};

export default SinglePost