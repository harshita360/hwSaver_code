import React from 'react';
import {Link} from 'react-router-dom';
import history from '../history';
import Modal from './Modal';


class ExitPage extends React.Component{

  renderActions(){

  return(

    <React.Fragment>
      <Link to ="/albumsList" className="ui button primary">Stay Here</Link>
    <Link to ="/home" className="ui button negative">Back to Home</Link>
    </React.Fragment>
  );
}


renderContent(){

  return 'Are you sure you want to leave this page?';
}

  render(){

  return(


     <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={()=>history.push('/albumsList')}
     />

   );
 }
}


export default ExitPage;
