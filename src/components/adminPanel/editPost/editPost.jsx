import React, {Component} from 'react'
import App from '../App'

import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
class editPost extends Component {
    state = {
        posts:[]

    }
    componentDidMount(){
        setTimeout(()=> {
        axios.get('http://localhost:4000/api/posts/'+ this.props.match.params.id)
        .then(result=>{
            //console.log(result)
            const Pro = result.data

            this.setState({posts : Pro})
        })
    },3000)
    }



    render(){
        console.log(this.state.posts)
        
        return(
            <App>
            <div className="content-wrapper">
              <div className="container-fluid">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="#">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Edit Post</li>
                </ol>
                <div className="row">
                <div className="container">
                <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="text" value={this.state.posts.title} onChange={(event)=>this.setState({title:(event.target.value)})} className="form-control" id="postTitle" aria-describedby="postTitle"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Author</label>
              <input type="text" value={this.state.posts.author} onChange={(event)=>this.setState({author:(event.target.value)})} className="form-control" id="postAuthor" aria-describedby="postAuthor"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Category</label>
              <input type="text" value={this.state.posts.category} onChange={(event)=>this.setState({category:(event.target.value)})} className="form-control" id="postCategory" aria-describedby="postCategory"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Tag</label>
              <input type="text" className="form-control" id="postTag" aria-describedby="postTag"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Content</label>
              <textarea value={this.state.posts.content} onChange={(event)=>this.setState({content:(event.target.value)})} className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Image</label>
              <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
                </div>
                </div>
              </div>
                <Footer/>
            </div>
        </App>
        )
    }

}
export default editPost