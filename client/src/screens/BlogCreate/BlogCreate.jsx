import React, { Component } from 'react'
import './BlogCreate.css'
import Layout from '../../components/Shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createBlog } from '../../services/blogs'

class BlogCreate extends Component {
    constructor() {
        super()
        this.state = {
            blog: {
                title: '',
                description: '',
                imgURL: '',
                author: ''
            },
            created: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            blog: {
            ...this.state.blog,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createBlog(this.state.blog)
        this.setState({ created })
    }

    render() {
        const { blog, created } = this.state

        if (created) {
            return <Redirect to={`/blogs`} />
        }
        return (
            <Layout>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input-title"
                        placeholder='Title'
                        value={blog.name}
                        name='title'
                        required
                        autoFocus
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-author"
                        placeholder='Author'
                        value={blog.author}
                        name='author'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={blog.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Image Link'
                        value={blog.imgURL}
                        name='imgURL'
                        required
                        onChange={this.handleChange}
                    />
                    <button type='submit' className="submit-button">Submit</button>
                </form>
            </Layout>
        )
    }
}

export default BlogCreate