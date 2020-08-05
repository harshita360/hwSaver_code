import React from 'react';
import PostList from'./PostList';
import {Link} from 'react-router-dom';

class DisplayPosts extends React.Component{
  render(){
    return (

  <div className="ui-container" style={ {backgroundColor:'black',border:'1px solid white',color:'white'}}>
  <div>
  <Link to ={'/albumsList'} style={{float: 'right',marginRight:'30px',marginTop:'10px'}}  className="big ui right labeled icon button"><i className="right arrow icon"></i>List of Albums</Link>
  </div>

  <PostList/>
  </div>
    );
  }
}
export default DisplayPosts;
