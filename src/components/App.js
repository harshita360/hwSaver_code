import React from 'react';
import HomeScreen from './HomeScreen';
import {Router,Route,Switch} from 'react-router-dom';
import DisplayImage from './DisplayImage';
import DisplayPosts from './DisplayPosts';
import WelcomeScreen from './WelcomeScreen';
import history from '../history';
import fire from '../config/fire';
import DisplayAlbums from './DisplayAlbums';
import ExitPage from './ExitPage';

class App extends React.Component{
    state={user:{}};

    componentDidMount(){
      this.authListener();
    }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user:user})
      }
      else {
        this.setState({user:null})
      }
    });
  }
  //<Route path="/home" exact component={HomeScreen}/>
//  <Route path="/" exact component={WelcomeScreen}/>

render(){

  return(
     <div>
       <Router history={history}>
        <div>
        <Switch>

        <Route path="/home" exact component={HomeScreen}/>
        <Route path="/imageList" exact component={DisplayImage}/>
        <Route path="/postsList" exact component={DisplayPosts}/>
        <Route path="/albumsList" exact component={DisplayAlbums}/>
        <Route path="/exit" exact component={ExitPage}/>


        <div className="App">
           {this.state.user?(<HomeScreen/>):(<WelcomeScreen/>)}
        </div>
        </Switch>

        </div>

     </Router>
     </div>



);

}
}
export default App;
