import jsonPlaceholder from './../apis/jsonPlaceholder';


export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts());
    await new Set(getState().post.data.map(post => post.userId))
    .forEach(async userId => await dispatch(fetchUser(userId)));
}

const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({ type: FETCH_POSTS, payload: response.data });
}

const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    
    dispatch({
        type: FETCH_USER,
        payload: response.data
    });
}