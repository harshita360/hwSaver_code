import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from'../actions';
//import UserHeader from './UserHeader';
class PostList extends React.Component{

state={ok:null};

  componentDidMount(){
    this.props.fetchPosts();

  }


  //showDetails=(uid)=>{
    //return this.props.posts.map(post=>{
      // if(uid===(post.id)){
        //return(
          //<div>{post.body}</div>
        //);
      //}
      //else{
        //  return <div></div>
        //}

  //})
    //}
 //<p >{post.body}</p>

  renderList(){
    return this.props.posts.map(post=>{
      return(
        <div className="item" key={post.id}>
        <i className="large middle aligned icon user"/>
        <div className="content">
        <div className="description" style={{color:'white'}}>
           <h3 style={{color:'#ffdf00'}} onClick={()=>this.setState({ok:post.id})}>{post.title}</h3>
           <Details idClicked={this.state.ok} id={post.id} body={post.body}/>

        </div>
        </div>
        </div>
      );


    });

  }
  render(){

    return(
    <div>
   <h1 style={{textAlign:'center'}}>List Of Posts</h1>
   <h4 style={{textAlign:'center'}}>Click on titles to see details</h4>
    <div className="ui relaxed divided list">
    {this.renderList()}</div>
    </div>
  );

    }
}

const Details=(props)=>{
  if(props.id===props.idClicked){
    return <div>{props.body}</div>
  }
  else{
    return <div></div>
  }
}

const mapStateToProps=(state)=>{
  return {posts:state.posts};


}
export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostList);
