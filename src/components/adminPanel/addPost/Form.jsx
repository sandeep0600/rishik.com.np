import React , {Component} from 'react'
import axios from 'axios'
import Aux from '../../hoc/_Aux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';   
class Form extends Component {
    state = {
        title: '',
        author:'',
        category:'',
        content:'',
        image: null

    }
    SendInfo=()=>{
        const formData = new FormData()
        formData.append('image', this.state.image, this.state.image.name)
        formData.append('title', this.state.title )
        formData.append('author', this.state.author )
        formData.append('category', this.state.category )
        formData.append('content', this.state.content )
        axios.post('http://localhost:4000/api/posts',formData)
        .then(response =>{
            console.log(response)
            toast(<div><span></span> Your Post Successfully Save into the Database</div>);

        })
        .catch(error => {
            console.log(error.response)
        });
    }
    handleChange=(value)=>{
        this.setState({ content: value })
      }
    imageuploadHangeler = (event) =>{
        console.log(event.target.files[0])
        this.setState({image:event.target.files[0] })
    }
    render(){
        
        return(
            <Aux>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="text" value={this.state.title} onChange={(event)=>this.setState({title:(event.target.value)})} className="form-control" id="postTitle" aria-describedby="postTitle"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Author</label>
              <input type="text" value={this.state.author} onChange={(event)=>this.setState({author:(event.target.value)})} className="form-control" id="postAuthor" aria-describedby="postAuthor"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Category</label>
              <input type="text" value={this.state.category} onChange={(event)=>this.setState({category:(event.target.value)})} className="form-control" id="postCategory" aria-describedby="postCategory"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Tag</label>
              <input type="text" className="form-control" id="postTag" aria-describedby="postTag"/>
            </div>
            <ReactQuill value={this.state.content} onChange={this.handleChange}  modules={Form.modules} formats={Form.formats}/>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Image</label>
              <input type="file" className="form-control-file" onChange={this.imageuploadHangeler} id="exampleInputFile" aria-describedby="fileHelp"/>

              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
            <ToastContainer />
        </Aux>

        )
    }

}
/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Form.modules = {
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
  Form.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

export default Form