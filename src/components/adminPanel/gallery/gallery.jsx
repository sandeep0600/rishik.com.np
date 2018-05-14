import React, {Component} from 'react'
import App from '../App'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
class gallery extends Component {

    state={
        imagesLink:[]
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/posts/images/allImages')
        .then(iamge=>{
            console.log(iamge)
            const Pro = iamge.data.postData
            const somthing = Pro.map(datas=>{
            return{
                ...datas,
                }

        })
        console.log(somthing)
        this.setState({imagesLink : somthing})
       
    })
}


    render(){
        const gallery = this.state.imagesLink.map(ga =>{
            return(
                <a href={ga.image} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                    <img src={ga.image} className="img-fluid"/>
                </a>
                

            )
        })
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
                            <div class="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="row">
                                           {gallery}
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