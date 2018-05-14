import React, {Component} from 'react'
import App from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
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
    handleChange=(value)=>{
      this.setState({ content: value })
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
                    <label htmlFor="exampleInputPassword1">Content</label>
                    <ReactQuill value={this.state.content} onChange={this.handleChange}  modules={editPost.modules} formats={editPost.formats}/>
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
/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
editPost.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote','code'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
editPost.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]
export default editPost