import React from 'react';
import {connect} from 'react-redux';
import {fetchAlbums} from'../actions';
//import UserHeader from './UserHeader';
class AlbumsList extends React.Component{

  componentDidMount(){
    this.props.fetchAlbums();
  }



  renderList(){
    return this.props.albums.map(album=>{
      return(
        <div className="item" key={album.id}>
        <i className="large middle aligned icon image"/>
        <div className="content">
        <div className="description" style={{color:'blue'}}>
           <h3 style={{color:'#50394c'}}>{album.title}</h3>
        </div>
        </div>
        </div>
      );


    });

  }
  render(){
    return(
    <div>
   <h1 style={{textAlign:'center'}}>List Of Albums</h1>

    <div className="ui relaxed divided list">
    {this.renderList()}</div>
    </div>
  );

    }
}

const mapStateToProps=(state)=>{
  return {albums:state.albums};


}
export default connect(mapStateToProps,{fetchAlbums:fetchAlbums})(AlbumsList);
