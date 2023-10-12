import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';


let initialState = {
    posts: [
        {id: 1,  message:'Hey! Whats up?', number_of_likes: 7 },
        {id: 2, message:'You look wondeful!', number_of_likes: 11},
    ],
    newPostText: 'text is here',
    profile: null,
};

const contentPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                number_of_likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ' ',
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USERS_PROFILE:{
            return {...state, profile: action.profile};
        }
            
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile}); 
export const getUsersProfile = (userId) => () => {
    usersAPI.getProfile(userId).then(response => {
        dispatchEvent(setUsersProfile(response.data))
    });
}; 

export default contentPageReducer;