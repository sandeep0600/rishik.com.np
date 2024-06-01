import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Dashboard from '../adminPanel/dashboard/Dashboard'
import AddPost from '../adminPanel/addPost/addPost'
import EditPost from '../adminPanel/editPost/editPost'
import AllPost from '../adminPanel/allPost/allPost'
import Gallery from '../adminPanel/gallery/gallery'
import Category from '../adminPanel/addCategory/addCategory'
import Login from '../../Login'

class appRoute extends Component {
    render(){
        return(
            <Router>
                    <Routes>
                        <Route exact path="/dashboard" element={<Dashboard/>} />
                        <Route path="/addpost" element={<AddPost/>} />
                        <Route path="/editpost/post=:id" element={<EditPost/>} />
                        <Route path="/allpost" element={<AllPost/>} />
                        <Route path="/addcategory" element={<Category/>} />
                        <Route path="/gallery" element={<Gallery/>} />
                        <Route path="/" element={<Login/>} />

                        </Routes>
           
            </Router>
        )
    }
}

export default appRoute
