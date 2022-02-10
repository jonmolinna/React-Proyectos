import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <img
                className='postImg'
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643903733/rlou1oguwhxhawlmoabm.png"
                alt=""
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className='postDate'>1 hora ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Id explicabo natus eveniet at? Consequuntur a veritatis
                nobis laborum nulla deserunt. Minus, quos ducimus.
                Neque nesciunt dicta praesentium soluta illum molestias!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Id explicabo natus eveniet at? Consequuntur a veritatis
                nobis laborum nulla deserunt. Minus, quos ducimus.
                Neque nesciunt dicta praesentium soluta illum molestias!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Id explicabo natus eveniet at? Consequuntur a veritatis
                nobis laborum nulla deserunt. Minus, quos ducimus.
                Neque nesciunt dicta praesentium soluta illum molestias!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Id explicabo natus eveniet at? Consequuntur a veritatis
                nobis laborum nulla deserunt. Minus, quos ducimus.
                Neque nesciunt dicta praesentium soluta illum molestias!
            </p>
        </div>
    )
}

export default Post