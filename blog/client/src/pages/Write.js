import React from 'react';
import './Write.css';

const Write = () => {

    return (
        <div className='write'>
            <img
                className='writeImg'
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1643899251/k0rveh9hf8ojhxlln6f4.png"
                alt=""
            />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='Tell your story ...'
                        className='writeInput writeText'
                    >
                    </textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write;