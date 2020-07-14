import React, { Component } from 'react'
import './BlogEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/Shared/Layout/Layout'
import { getBlog, updateBlog } from '../../services/blogs'

class BlogEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
          blog: {
                name: '',
                description: '',
                imgURL: '',
                price: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const blog = await getBlog(id)
        this.setState({ blog })
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            blog: {
                ...this.state.product,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = this.props.match.params
        const updated = await updateBlog(id, this.state.blog)
        this.setState({ updated })
    }

    render() {

        const { blog, updated } = this.state

        if (updated) {
            return <Redirect to={`/blogs/${this.props.match.params.id}`} />
        }

        return (
            <Layout>
                <div className="blogs-edit">
                    <div className="image-container">
                        <img className="edit-blog-image" src={blog.imgURL} alt={blog.name} />
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="edit-input-image-link"
                                placeholder='Image Link'
                                value={blog.imgURL}
                                name='imgURL'
                                required
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input
                            className="input-name"
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
                            cols={78}
                            placeholder='Description'
                            value={blog.description}
                            name='description'
                            required
                            onChange={this.handleChange}
                        />
                        <button type='submit' className="save-button">Save</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default BlogEdit