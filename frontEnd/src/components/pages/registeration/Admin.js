import React, { Component } from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useHistory } from 'react-router-dom';

    
    
    class Admin extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
           email: null,
           password: null,
           userName:null,
           admin_name:null,
           type:"Admin"
           //msg:null,
           
          };
          
      };
      /**   const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [msg, setMsg] = useState('');
        const history = useHistory(); */
    
      handleSubmit = (event) => {
        alert('A form was submitted: ');
        event.preventDefault();
      }
    
    
      fetchData() {
        fetch("http://localhost:8000/signup", {
            method: "POST",
            body: JSON.stringify({
               email: this.state.email,
               password: this.state.password,
               username:this.state.userName,
               adminName:this.state.adminName,
               type:this.state.type
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        // .then(data=>{
        //   this.setState({token: data.accessToken})
        // })
        console.table(this.state.email);
        console.table(this.state.password);
        console.table(this.state.userName);
        console.table(this.state.adminName);
    
      }
    
      componentDidMount() {
    
      }
    

    render() {
     
      
        return (
            <>
                {/* =============== SignIn =============== */}
            
                <form className="form" on onSubmit={this.handleSubmit}>
                <h3>Sign Up Now </h3>
                <label>it's quick and easy </label>
                <div className="input-container" >
                  <label>Username </label>
                  <input type="text2" name="username" required value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                </div>

                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="password" required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
       
                </div>
                <div className="input-container">
                  <label>Email </label>
                  <input type="email2" name="email" required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
       
                </div>
                <div className="input-container">
                  <label>Admin Name </label>
                  <input type="text2" name="admin_name" required value={this.state.admin_name} onChange={(e) => this.setState({ admin_name: e.target.value })}/>
       
                </div>
              
                <div className="button-container">
                 <input type="button" value="Sign up" onClick={() => this.fetchData()} />
                </div>

                <div class="textInHorizontalLine">
                    <span>Already a member?</span>
                </div>
                 <div>
                 <a class="coreRegLinkHighlight" href="registeration">Sign in</a> 
                  <span> using your EgyBook account.</span>
                       
                 </div>
            </form>
         
            </>
        
        );
      
    } 
}


 
export default Admin;



 


        



