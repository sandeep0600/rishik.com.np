import React, {Component} from 'react'

import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <NavLink className="navbar-brand" to="/">Blog Website</NavLink>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                  <NavLink exect className="nav-link" exact to="/dashboard"><i className="fa fa-fw fa-dashboard"></i>
                  <span className="nav-link-text" style={{marginTop:'50px'}}>&nbsp;Dashboard</span></NavLink>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                <NavLink className="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseComponents" data-parent="#exampleAccordion">
                <i className="fa fa-fw fa-wrench"></i>
                <span className="nav-link-text">&nbsp;Posts</span>
                </NavLink>
                <ul className="sidenav-second-level collapse" id="collapseComponents">
                  <li>
                    <NavLink exect to="/addpost">Add Post</NavLink>
                  </li>
                  <li>
                    <NavLink exect to="/allpost">All Post</NavLink>
                  </li>
                  <li>
                    <NavLink exect to="/addcategory">Category</NavLink>
                  </li>
                </ul>
                </li>
                {/* <li className="nav-item" data-toggle="tooltip" data-placement="right" title="gallery">
                <NavLink exect className="nav-link" exact to="/gallery"><i className="fa fa-image"></i><span className="nav-link-text">
                &nbsp;Gallery</span></NavLink>
                </li> */}
              </ul>
            </div>
        </nav>
        )
    }
}

export default Menu