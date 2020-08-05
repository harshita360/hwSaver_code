import React from 'react';
import AlbumsList from './AlbumsList';
import {Link} from 'react-router-dom';

class DisplayAlbums extends React.Component{

render(){
  return(
    <div>
    <div>

  <Link to ='/exit' style={{marginTop:'10px',marginRight:'10px'}}className="big ui right floated button negative">Click Here!</Link>
    </div>

    <div className="ui-container" style={ {backgroundColor:'#d5f4e6',border:'1px solid black',color:'#bc5a45'}}>
    <AlbumsList/>
    </div>
    </div>

  );
}

}
export default DisplayAlbums;
