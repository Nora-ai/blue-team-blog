import React from 'react'
import './Home.css'
import BlogCards from '../../components/BlogCards/BlogCards'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <BlogtCards />
      </div>
    </Layout>
  )
}

export default Home