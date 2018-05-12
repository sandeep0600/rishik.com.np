import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import dashboard from '../adminPanel/dashboard/dashboard'
import addPost from '../adminPanel/addPost/addPost'
import editPost from '../adminPanel/editPost/editPost'
import allPost from '../adminPanel/allPost/allPost'
import gallery from '../adminPanel/gallery/gallery'
class appRoute extends Component {
    render(){
        return(
            <Router>
                    <Switch>
                        <Route exact path="/" component={dashboard} />
                        <Route path="/addpost" component={addPost} />
                        <Route path="/editpost/post=:id&action=edit" component={editPost} />
                        <Route path="/allpost" component={allPost} />
                        <Route path="/gallery" component={gallery} />

                    </Switch>
            </Router>
        )
    }
}

export default appRoute