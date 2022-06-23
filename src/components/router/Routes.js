import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Dashboard from '../adminPanel/dashboard/Dashboard'
import AddPost from '../adminPanel/addPost/AddPost'
import EditPost from '../adminPanel/editPost/EditPost'
import AllPost from '../adminPanel/allPost/AllPost'
import Gallery from '../adminPanel/gallery/gallery'
import Category from '../adminPanel/addCategory/AddCategory'
import Login from '../../Login'

class appRoute extends Component {
    render(){
        return(
            <Router>
                    <Routes>
                        <Route exact path="/dashboard" element={<Dashboard/>} />
                        <Route path="/addpost" element={<AddPost/>} />
                        <Route path="/editpost/post=:id&action=edit" element={<EditPost/>} />
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