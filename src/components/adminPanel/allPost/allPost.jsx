import React, {Component} from 'react'
import App from '../App'
import Table from './Table/Table'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom';
class AllPost extends Component {
    render(){
        return(
            <App>
            <div className="content-wrapper">
              <div className="container-fluid">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">All Post</li>
                </ol>
                <Table/>
              </div>
              <Footer/>
            </div>
        </App>
        )
    }

}
export default AllPost