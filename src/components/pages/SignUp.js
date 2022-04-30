import React from "react";
import profile from '../images/profile_pic.jpg';
import email from '../images/email.jpg';
import password from '../images/password.jpg';
import './signup.css';
function SignUp() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Sign up</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={password} alt="password" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>

           <div className="second-input">
             
             <img src={password} alt="password" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Sign Up</button>
          </div>
           
            <p className="link">
              {/* <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a> */}
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default SignUp;