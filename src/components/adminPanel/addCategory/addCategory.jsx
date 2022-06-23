import React, {Component} from 'react'
import App from '../App'
import Addcatform from './addCatForm'
import Showcat from './showCat'
import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
class Category extends Component {
    render(){
        return(
            <App>
            <div className="content-wrapper">
              <div className="container-fluid">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Add Category</li>
                </ol>
                <div className="container">
                    <div className="row">
                            <div className="col-md-4">
                                <Addcatform/>
                            </div>
                            <div className="col-md-8">
                            <Showcat/>
                            </div>
                        {/* <ToastContainer /> */}
                    </div>
                  </div>
                </div>
                <Footer/>
            </div>
            </App>
        )
    }
}

export default Category