import React, { Component } from 'react'
import './Blogs.css'

import Blog from '../../components/Blog/Blog'
import Search from '../../components/Search/Search'
import { AZ, ZA } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/Shared/Layout/Layout'
import { getBlogs } from '../../services/blogs'

class Blogs extends Component {
  constructor() {
    super()
    this.state = {
      allBlogs: [],
      queriedBlogs: [],
      sortType: ''
    }
  }

  async componentDidMount() {
    const allBlogs = await getBlogs()
    this.setState({ 
      allBlogs: allBlogs,
      queriedBlogs: allBlogs 
    })
  }

  handleSearch = event => {
    const sort = () => this.handleSort(this.state.sortType)
    const queriedBlogs = this.state.allBlogs.filter(blog => blog.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ queriedBlogs }, sort)
  }

  handleSort = type => {
    this.setState({ sortType: type })
    const { queriedBlogs } = this.state
    switch (type) {
      case "title-ascending":
        this.setState({
          queriedBlogs: AZ(queriedBlogs)
        });
        break
      case "title-descending":
        this.setState({
          queriedBlogs: ZA(queriedBlogs)
        });
        break
      // case "price-ascending":
      //   this.setState({
      //     queriedBlogs: lowestFirst(queriedBlogs)
      //   });
      //   break
      // case "price-descending":
      //   this.setState({
      //     queriedBlogs: highestFirst(queriedBlogs)
      //   });
        // break
      default:
        break
    }
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const blogsJSX = this.state.queriedBlogs.map((blog, index) =>
      <Blog _id={blog._id} title={blog.title} imgURL={blog.imgURL} post={blog.post} author={blog.author} key={index} />
    )

    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} onChange={this.handleSearch} />
        <Sort onSubmit={this.handleSubmit} onChange={this.handleSort} />
        <div className="blogs">
          {blogsJSX}
        </div>
      </Layout>
    )
  }
}

export default Blogs