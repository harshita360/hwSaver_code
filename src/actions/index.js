import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPosts=()=>{
  return async (dispatch)=>{
  const response=await jsonPlaceholder.get('/posts');

  dispatch({type:'FETCH_POSTS',payload:response.data})
};
};


export const fetchAlbums=()=>{
  return async (dispatch)=>{//inner function
  const response=await jsonPlaceholder.get('/albums');

  dispatch({type:'FETCH_ALBUMS',payload:response.data})
};
};
