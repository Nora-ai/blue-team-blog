import React from 'react'
import './Home.css'
import BlogCards from '../../components/BlogCards/BlogCards'
import Layout from '../../components/Shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <BlogCards />
      </div>
    </Layout>
  )
}

export default Home