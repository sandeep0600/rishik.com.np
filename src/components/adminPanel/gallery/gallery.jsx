import React, {Component} from 'react'
import App from '../App'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom';
class gallery extends Component {
    render(){
        return(
            <App>
                  <div className="content-wrapper">
                         <div className="container-fluid">
                         <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                <NavLink to="/">Dashboard</NavLink>
                                </li>
                                <li className="breadcrumb-item active">Gallery</li>
                          </ol>
                         </div>
                         <div className="container">
                            <div className="container gallery-container">
                                <div className="tz-gallery">
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <NavLink className="lightbox" to="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <a className="lightbox" href="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <a className="lightbox" href="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"> 
                                        <div className="col-md-4">
                                            <div className="card">
                                                <a className="lightbox" href="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <a className="lightbox" href="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <a className="lightbox" href="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg">
                                                <img src="https://mobirise.com/bootstrap-4-theme/assets/images/brooke-lark-207271-2000x1333-800x533.jpg" alt="Park" className="card-img-top"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                   </div>
                   <Footer/>
        </App>
        )
    }

}
export default gallery