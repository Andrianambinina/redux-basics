import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";

const initialState = {};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.paylod;
        case ADD_POST:
            return [action.paylod, ...state];
        case EDIT_POST:
            return state.map((post) => {
                if (post.id === action.paylod.id) {
                    return { ...post, content: action.paylod.content };
                } else {
                    return post;
                }
            });
        case DELETE_POST:
            return state.filter((post) => post.id !== action.paylod.id);
        default:
            return state;
    }
};

export default postReducer;