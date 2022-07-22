import axios from "axios";

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELTE_POST';

export const getPosts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
            .then((res) => dispatch({
                type: GET_POSTS,
                paylod: res.data
            }))
            .catch((err) => console.log(err));
    }
};

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/posts', data)
            .then(() => dispatch({
                type: ADD_POST,
                paylod: data
            }))
            .catch((err) => console.log(err));
    }
};

export const editPost = (data) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: `http://localhost:3001/posts/${data.id}`,
            data: data
        })
            .then(() => dispatch({
                type: EDIT_POST,
                paylod: data
            }))
            .catch((err) => console.log(err));
    }
};

export const deletePost = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3001/posts/${id}`)
            .then(() => dispatch({
                type: DELETE_POST,
                paylod: { id }
            }))
            .catch((err) => console.log(err));
    }
};

