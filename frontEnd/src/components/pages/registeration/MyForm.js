
import React from 'react'
 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <form className="form" >
      <form onSubmit={this.handleSubmit}>
           <div className="input-container" >
        <label>
          User name:
          <input type="text2" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <label>
        <label>Password </label>
        <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        </div>
        </form>
       

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;