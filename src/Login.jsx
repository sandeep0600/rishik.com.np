import React, { Component } from 'react';
// import './App.css';

import'../src/cddd.css'
// import icon from './assets/hazardlogo.jpg'
import icon from './assets/firelogo.png'
import iconarrow from './assets/fast.png'

import { Route, Redirect } from 'react-router'
import signin from './firebase'








class Login extends Component {

    state = {
        email: '',
        password:''
       

    }
// function Login() {

// const [u_email,setemail] = React.useState('');
// const [u_password,setpassword] = React.useState('');

// const dispatch = useDispatch();

// console.log(myState);
// console.log(myState.gettinguser.email);
// let navigate = useNavigate();

// let btnSignin = async(e)=>{
//   e.preventDefault();
//   try{
//  console.log( await signin(u_email,u_password));
// //  alert('successful');

// navigate('/dashboard');
// }
// catch{
// alert('Email or Password is Incorrect');
// }
//   // dispatch(AddUser())
// }

SendInfo= (e)=>{
    e.preventDefault();

   let  email1 = this.state.email;
    let password1 = this.state.password;
    // this.props.naviagtes('/Dashboard')
    // let history = useNavigate();
// try{
    // console.log(signin(email1,password1));
    // alert('successful');
{/* <Redirect push to="/dashboard" /> */}


   if (email1 == "admin@blog.com" && password1 == "123456") {
//     console.log("succefull");
    // <Route exact path='/'>
    window.location.href='/dashboard'
   }
// this.props.history.push('/dashboard');
    {/* </Route> */}
   
    // alert('successful');
//    }
// { <Route exact path="/">
// {signin(email1,password1) ? <Redirect to="/dashboard" /> : <Login />}
// </Route> }

    // <Dashboard/>
//    }
//    }
// //    navigate('/dashboard');
//    }catch(e){
//    alert('Email or Password is Incorrect');
//    }

} 





render(){
    return (
        
        <div className="mainContainer">
           <div className="leftContainer">
               <div style={{display:'flex',marginLeft:'30px'}}>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               </div>
               <div style={{display:'flex',marginLeft:'30px',marginTop:'-20px'}}>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               </div>
               <div style={{display:'flex',marginLeft:'30px',marginTop:'-20px'}}>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               </div>
               <div style={{display:'flex',marginLeft:'30px',marginTop:'-20px'}}>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               </div>
               <div style={{display:'flex',marginLeft:'30px',marginTop:'-20px'}}>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="circle"></div>
               </div>
              
          <div>
              <h1 className="Lheading" >Blog Website</h1>
              <h1  className="Lheading">Admin Panel</h1>
              <div style={{display:'flex',marginTop:'20px'}}>
              <div className="circle2"><img className='innerarrow' alt='' src={iconarrow} width="30px" height="30px"  />
              </div>
              <p className='Lpara' style={{fontSize:'25px',color:'#fff',marginLeft:'20px',marginTop:'29px'}}>Add Blogs</p>
              </div>
              <div style={{display:'flex'}}>
              <div className="circle3"><img className='innerarrow' alt='' src={iconarrow} width="30px" height="30px"  /></div>
              <p className='Lpara' style={{fontSize:'25px',color:'#fff',marginLeft:'20px',marginTop:'4px'}}>View Blogs</p>
              </div>
              <div style={{display:'flex'}}>
              <div className="circle3"><img className='innerarrow' alt='' src={iconarrow} width="30px" height="30px"  /></div>
              <p className='Lpara' style={{fontSize:'25px',color:'#fff',marginLeft:'20px',marginTop:'4px'}}>Add Category</p>
              </div>
              <div style={{display:'flex'}}>
              <div className="circle3"><img className='innerarrow' alt='' src={iconarrow} width="30px" height="30px"  /></div>
              <p className='Lpara' style={{fontSize:'25px',color:'#fff',marginLeft:'20px',marginTop:'4px'}}>View Gallery</p>
              </div>
           
          </div>
           </div>
           <div className="rightContainer ">
               <div className="imgset">
<img src={icon} alt='' width="250px" height="250px"  /></div>
<h1 className="sHeading">Sign In</h1>
        <form>
            <div className="formalign">
        <label className="sLabelOne">Email</label> <br/>
        <input value={this.state.email} onChange={(event)=>this.setState({email:(event.target.value)})}  className="sInputOne" type='text' placeholder='Enter Email' ></input> <br/>
        </div>
        <div className="formalign">
        <label className="sLabeltwo">Password</label> <br/>
        <input value={this.state.password} onChange={(event)=>this.setState({password:(event.target.value)})}  className="sInputOne2" type='text' placeholder='Enter Password' ></input> <br/>     
        </div>   
        <button type="submit" onClick={this.SendInfo}  className="sBtnSignup">
            
          Sign In
      
          </button>
      </form>
      {/* <p className="paraTxt" >Click here to
        <Link to="/" className="linkTxt">Sign up</Link></p> */}
        </div>
           </div>
      
          
    )
}
}


export default Login;
// export function logg() {
//     const naviagte = useNavigate();
//   return (

//     <Login naviagtes={naviagte} />
//   )
// }