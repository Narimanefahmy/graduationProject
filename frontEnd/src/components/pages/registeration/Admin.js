import React, { Component } from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


class Admin extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            count: 1
            
        };
    }

  

    render() {
     
      
        return (
            <>
                {/* =============== SignIn =============== */}
            
                <div className="form">
                <h3>Sign Up Now </h3>
                <label>it's quick and easy </label>
                <div className="input-container" >
                  <label>Username </label>
                  <input type="text" name="uname" required />
      
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
       
                </div>
                <div className="input-container">
                  <label>Email </label>
                  <input type="email" name="email" required />
       
                </div>
                <div className="input-container">
                  <label>Admin Name </label>
                  <input type="text" name="uname" required />
       
                </div>
              
                <div className="button-container">
                  <input type="submit" value="Sign up" />
                </div>

                <div class="textInHorizontalLine">
                    <span>Already a member?</span>
                </div>
                 <div>
                 <a class="coreRegLinkHighlight" href="registeration">Sign in</a> 
                  <span> using your EgyBook account.</span>
                       
                 </div>
            </div>
         
            </>
        
        );
      
    } 
}


 
export default Admin;