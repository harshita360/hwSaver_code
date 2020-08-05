import React from 'react';
import unsplash from'../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import {Link} from 'react-router-dom';
class DisplayImage extends React.Component{


  state={images:[]}
    onSearchSubmit=async (term)=>{
      const response =await unsplash.get('/search/photos',{
        params:{query:term},
      });
      this.setState({images:response.data.results});
    };
    render(){
    return (
      <div>
      <div className="ui clearing seagment" style={{marginTop:'20px',backgroundColor:'#ffef96',height:'50px'}}>
      <div className="ui right floated header">
      <Link to ={'/postsList'}className=" big ui  secondary button">Go To Posts</Link>
      </div>
      <div className="ui left floated header">
      <Link to ={'/home'} className="big ui secondary button">Back</Link>
      </div>
      <h2 style={{textAlign:'center'}}>Discover Pictures</h2>
      </div>

      <br/>
      <br/>
      <br/>

      <div className ="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
      <br/>
      <br/>
      </div>
      </div>
    );
  }
  }




export default DisplayImage;
