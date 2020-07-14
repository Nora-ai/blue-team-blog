import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            <Link className="card" to={`/blogs/${props.title}`}>
                <img className="blog-card-image" src={props.imgURL} alt={props.title} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default BlogCard