import React from 'react';
import fire from '../config/fire';



import {Link} from 'react-router-dom';



class HomeScreen extends React.Component{
  state = {

      photo: ""

    };


  componentDidMount() {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=pGX5dNaJ2uffyJTrsyMhFMSqQ1KkcPlX7xlYglQq`)
        .then(response => response.json())
        .then(json => this.setState({ photo: json }));
    }

// <img src={this.state.photo.url} alt={this.state.photo.title} /

onSignOut(){
  fire.auth().signOut().then(()=> {
   console.log("logged out")




}).catch((err)=> {
  console.log("there was an error")
});
}

    render() {

      console.log(this.state.photo.url);
        return (
                   <div style={{backgroundImage:`url(${this.state.photo.url})`,height:'600px'}}>
                    <div className="left floated content">
                    <button onClick={this.onSignOut}style={{marginLeft:'20px',marginTop:'20px'}}className=" big ui negative basic button">
                    <i className="icon user"></i>
                     LOGOUT
                    </button>
                     </div>
                    <h1 style ={{color:'white',textAlign:'center'}}>NASA's Astronomy Picture of the Day</h1>
                    <div>
                    <h3 style ={{color:'yellow',textAlign:'center'}}>{this.state.photo.title}</h3>
                     <br/>
                     <br/>
                     <p style={{color:'white',marginLeft:'30px',marginRight:'30px'}}>{this.state.photo.explanation}</p>
                     </div>
                     <br/>
                     <br/>
                     <br/>
                    <br/>
                    <br/>


       <div className="right floated content">
      <Link to ={'/imageList'} style={{float: 'right',marginRight:'30px'}}  className="big ui right labeled icon button"><i className="right arrow icon"></i>Image Search</Link>
           </div>


          </div>
        );
      }


}



export default HomeScreen;
