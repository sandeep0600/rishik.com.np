import React , {Component} from 'react'
import axios from 'axios'
import Aux from '../../hoc/_Aux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Form extends Component {

    state = {
        title: '',
        author:'',
        category:'',
        content:''

    }
    SendInfo=()=>{
        const data = {
            title:this.state.title,
            author:this.state.author,
            category:this.state.category,
            content:this.state.content
        }
        axios.post('http://localhost:4000/api/posts',data)
        .then(response =>{
            console.log(response)
            toast(<div><span></span> Your Post Successfully Save into the Database</div>);

        })
        .catch(error => {
            console.log(error.response)
        });
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
            <div className="form-group">
              <label htmlFor="exampleTextarea">Content</label>
              <textarea value={this.state.content} onChange={(event)=>this.setState({content:(event.target.value)})} className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Image</label>
              <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
            <ToastContainer />
        </Aux>

        )
    }
}

export default Form