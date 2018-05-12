import React, {Component} from 'react'
import App from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
// import Progress from "react-progress-2";
// import "react-progress-2/main.css"
class editPost extends Component {
    state = {
        posts:[],
        title: '',
        author:'',
        category:'',
        content:''

    }
    componentDidMount(){
     // Progress.show();
  //    setTimeout(()=> {  
      axios.get('http://localhost:4000/api/posts/'+ this.props.match.params.id)
      .then(result=>{
          //console.log(result)
          const Pro = result.data
          console.log(Pro)
        setTimeout(()=> {
          this.setState({
            title:Pro.title,
            author:Pro.author,
            category:Pro.category,
            content:Pro.content
          })
        //Progress.hide(); 
        },3000)

      })
  // },3000)
    }
    SendInfo=()=>{
        const data = {
            title:this.state.title,
            author:this.state.author,
            category:this.state.category,
            content:this.state.content
        }
        axios.put('http://localhost:4000/api/posts/post='+ this.props.match.params.id+'&action=edit', data)
        .then(response =>{
            console.log(response)
            toast(<div><span></span> Your Post Successfully Updated into the Database</div>);
        })
        .catch(error => {
            console.log(error.response)
        });
    }
    render(){
        //console.log(this.state.posts)
        
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
                  {/* <Progress.Component/> */}
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Title</label>
                      <input type="text" placeholder={this.state.title} onChange={(event)=>this.setState({title:(event.target.value)})} className="form-control" id="postTitle" aria-describedby="postTitle"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Author</label>
                      <input type="text" placeholder={this.state.author} onChange={(event)=>this.setState({author:(event.target.value)})} className="form-control" id="postAuthor" aria-describedby="postAuthor"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Category</label>
                      <input type="text" placeholder={this.state.category} onChange={(event)=>this.setState({category:(event.target.value)})} className="form-control" id="postCategory" aria-describedby="postCategory"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Tag</label>
                      <input type="text" className="form-control" id="postTag" aria-describedby="postTag"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleTextarea">Content</label>
                      <textarea placeholder={this.state.content} onChange={(event)=>this.setState({content:(event.target.value)})} className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Image</label>
                      <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                      <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                    </div>
                    <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
                    <ToastContainer />
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