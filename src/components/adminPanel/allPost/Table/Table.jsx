import React, {Component} from 'react'
import axios from 'axios'
import NProgress from 'nprogress'
class Table extends Component {

    state ={
        posts : []
    }
   componentDidMount(){
    NProgress.start(0.0);
       axios.get('http://localhost:4000/api/posts/')
       .then(result =>{
           console.log(result)
        const Pro = result.data
        const somthing = Pro.map(datas=>{
            return{
                ...datas,
                }
        })
        setTimeout(()=> {
            this.setState({posts : somthing})
        },3000)
         NProgress.done(1.0);
       })
   }

    render(){
        const allpost = this.state.posts.map(allposts =>{
            return (
                <tr key= {allposts._id}>
                      <td>{allposts.title}</td>
                      <td>{allposts.author}</td>
                      <td>{allposts.category}</td>
                      <td></td>
                      <td><button type="button" className="btn btn-primary">Edit</button>&nbsp;<button type="button" className="btn btn-danger">Delete</button></td>
               </tr>
            )
        })
        return(
            <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i>All Posts</div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Categories</th>
                      <th>Tags</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allpost}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
       </div>
        )
    }
}

export default Table