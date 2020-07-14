import React, { Component } from 'react';
import './BlogCards.css';
import BlogCard from '../BlogCard/BlogCard'
import { getBlogs } from '../../services/blogs'

class BlogCards extends Component {
  constructor() {
    super()
    this.state = {
      blogs: []
    }
  }

  async componentDidMount() {
    const blogs = await getBlogs()
    this.setState({ blogs })
  }

  render() {

    const CARDS = this.state.blogs.reverse().map((blog, index) =>
      index < 8 ? <BlogCard _id={blog._id} name={blog.title} imgURL={blog.imgURL} key={index} /> : null
    )

    return (
      <div className="blog-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default BlogCards