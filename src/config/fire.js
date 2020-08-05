import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDk7o_yrnd7RHC_Rblucwf4HeXyFxJr0Os",
    authDomain: "design-b0302.firebaseapp.com",
    databaseURL: "https://design-b0302.firebaseio.com",
    projectId: "design-b0302",
    storageBucket: "design-b0302.appspot.com",
    messagingSenderId: "933347188261",
    appId: "1:933347188261:web:fb63e6bf9db7f29ab1e9cc"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
