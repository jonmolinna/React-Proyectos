import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/Context';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState(null);
    const PF = "http://localhost:9000/images/"; // para imagen
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updatedMode, setUpdatedMode] = useState(false);
    
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:9000/api/posts/${path}`);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };

        getPost();

    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/api/posts/${post._id}`, { data: { username: user.username }});
            window.location.replace("/");
            
        } catch (err) {
            console.log(err.response);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:9000/api/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            // window.location.reload(); carga la pagina
            setUpdatedMode(false);
        } catch (err) {
            console.log(err.response);
        }
    };

    return (
        <div className='singlePost'>
            {
                post && (
                    <div className="singlePostWrapper">
                        {
                            post.photo && (
                                <img
                                    className='singlePostImg'
                                    src={PF + post.photo}
                                    alt=""
                                />
                            )
                        }
                        {
                            updatedMode ? (
                                <input
                                    type="text"
                                    value={title}
                                    className="singlePostTitleInput"
                                    onChange={(e) => setTitle(e.target.value)}
                                    autoFocus
                                />
                            ) : (
                                <h1 className='singlePostTitle'>
                                    { title }
                                    {
                                        post.username === user?.username && (

                                            <div className='singlePostEdit'>
                                                <i
                                                    className="singlePostIcon fa-solid fa-pen-to-square"
                                                    onClick={() => setUpdatedMode(true)}
                                                ></i>
                                                <i 
                                                    className="singlePostIcon fa-solid fa-trash-can"
                                                    onClick={handleDelete}
                                                ></i>
                                            </div>
                                        )
                                    }
                                </h1>

                            )
                        }
                        <div className='singlePostInfo'>
                            <span className='singlePostAuthor'>
                                Author: 
                                <Link to={`/?user=${post.username}`} className="link">
                                    <b>{ post.username }</b>
                                </Link>
                            </span>
                            <span className='singlePostDate'>
                                { new Date(post.createdAt).toDateString() }
                            </span>
                        </div>
                        {
                            updatedMode ? (
                                <textarea
                                    className='singlePostDescInput'
                                    value={desc}
                                    onChange={e => setDesc(e.target.value)}
                                    rows="5"
                                />

                            ) : (
                                <p className='singlePostDesc'>
                                    { desc }
                                </p>
                            )
                        }
                        {
                            updatedMode && (
                                <button className='singlePostButton' onClick={handleUpdate}>
                                    Update
                                </button>
                            )
                        }
                    </div>

                )
            }
        </div>
    )
};

export default SinglePost