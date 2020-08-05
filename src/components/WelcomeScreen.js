import React from 'react';
import fire from '../config/fire';

class WelcomeScreen extends React.Component{

  state={
      email:"",
      password:""
    };

    login=(e)=>{
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        

      }).catch((err)=>{
        console.log(err);
      })
  }


//  SignUp=(e)=>{
  //  e.preventDefault();
    //fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      //console.log(u);
    //}).catch((err)=>{
      //console.log(err);
    //})
  //}

handleChange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}


  render(){
    return(
      <div className="ui container" style={{backgroundColor:' #80ced6',height:'600px', width:'800px'}}>
      <br/>
      <h2 style={{textAlign:'center'}}>LOGIN HERE!</h2>
      <br/>
      <div className="ui form">
      <form>
      <label>Enter your registered email</label>

        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={this.handleChange}
        value={this.state.email}/>
        <br/>
        <br/>
        <br/>
    <label>Enter you password </label>
        <input
        type="password"
        name="password"
        id="password"
        onChange={this.handleChange}
        placeholder="Password"
        value={this.state.password}/>

<br/>
<br/>
        <button
        className="big ui basic button active" style={{marginLeft:'310px'}}onClick={this.login}><i className="icon user"></i>Login</button>




      </form>
      </div>
      </div>


    );
  }
}

export default WelcomeScreen;
