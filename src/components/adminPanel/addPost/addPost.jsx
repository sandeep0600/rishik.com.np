import React, {Component} from 'react'
import App from '../App'
import Footer from '../Footer/Footer'
import Form from './Form'
import { NavLink } from 'react-router-dom';
class AddPost extends Component {
    render(){
        return(
            <App>
            <div className="content-wrapper">
              <div className="container-fluid">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Add Post</li>
                </ol>
                <div className="row">
                <div className="container">
                 <Form/>
                </div>
                </div>
              </div>
                <Footer/>
            </div>
        </App>
        )
    }

}
export default AddPost