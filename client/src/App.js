import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Blogs from './screens/Blogs/Blogs'
import BlogCreate from './screens/BlogCreate/BlogCreate'
import BlogEdit from './screens/BlogEdit/BlogEdit'
import BlogDetail from './screens/BlogDetail/BlogDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/add-blog" component={BlogCreate} />
        <Route exact path="/blogs/:id/edit" component={BlogEdit} />
        <Route exact path="/blogs/:id" component={BlogDetail} />
      </Switch>
    </div>
  )
}

export default App