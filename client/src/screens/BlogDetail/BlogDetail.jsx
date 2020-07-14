import React, { Component } from 'react'
import './BlogDetail.css'
import Layout from '../../components/Shared/Layout/Layout'
import { getBlog, deleteBlog } from '../../services/blogs'
import { Link } from 'react-router-dom'

class BlogDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: {
                title: '',
                description: '',
                imgURL: ''
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const blog = await getBlog(id)
        this.setState({ blog })
    }

    render() {
        const { blog } = this.state
        return (
            <Layout>
                <div className="blog-detail">
                    <img className="blog-detail-image" src={blog.imgURL} alt={blog.name} />
                    <div className="detail">
                        <div className="title">{blog.title}</div>
                        <div className="author">{`By ${blog.author}`}</div>
                        <div className="description">{blog.description}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/blogs/${blog._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deleteBlog(blog._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default BlogDetail
