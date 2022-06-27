import React, {Component} from 'react'
import axios from 'axios'
// import Progress from "react-progress-2";
// import "react-progress-2/main.css"
import {NavLink} from 'react-router-dom'
class IconCards extends Component {
  
  state={
    count:''
  }

  componentDidMount(){
    // Progress.show();
    axios.get('http://localhost:4000/api/posts')
    .then(result =>{
      const counts = result.data.count
      this.setState({count:counts})
    })
    // Progress.hide();
  }


    render(){
        return(
            <div className="row">
            {/* <Progress.Component/> */}
            <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">{this.state.count} New Posts!</div>
              </div>
              <NavLink className="card-footer text-white clearfix small z-1" to="/allpost">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-list"></i>
                  </div>
                  <div className="mr-5">All Posts!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/allpost">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-shopping-cart"></i>
                  </div>
                  <div className="mr-5">Add Post!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/addpost">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
          </div>
          {/* <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fa fa-fw fa-support"></i>
                  </div>
                  <div className="mr-5">View & Add Category!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/addcategory">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right"></i>
                  </span>
                </a>
              </div>
          </div> */}
        </div>
        )
    }
}

export default IconCards