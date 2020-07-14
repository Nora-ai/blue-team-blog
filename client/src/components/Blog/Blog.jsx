import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        <>
            <Link className="blog" to={`/blogs/${props._id}`}>
                <div className="blog-title">{props.title}</div>
                <img className="blog-image" src={props.imgURL} alt={props.title} />
                <div className="blog-post">{props.post}</div>
                <div className="blog-author">{`$${props.author}`}</div>
            </Link>
        </>
    )
}

export default Blog

//added line 9
//confused about id on line 8