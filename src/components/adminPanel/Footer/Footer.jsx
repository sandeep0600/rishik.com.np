import React, {Component} from 'react'
import Aux from '../../hoc/_Aux'
class Footer extends Component {
    render(){
        return(
            <Aux>
            <footer className="sticky-footer">
            <div className="container">
                <div className="text-center">
                <small>Copyright © Your Website 2018</small>
                </div>
            </div>
            </footer>
            <a className="scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up"></i>
            </a>
            </Aux>
        )
    }
}
export default Footer