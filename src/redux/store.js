import contentPageReducer from './contentPage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';

let store = {
    _state: {
        contentPage: {
            posts: [
                {id: 1,  message:'Hey! Whats up?', number_of_likes: 7 },
                {id: 2, message:'You look wondeful!', number_of_likes: 11},
            ],
            newPostText: 'text is here',
        },
        dialogsPage: {
            messages: [
                {id: 1, text:'Hi!'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'Good morning'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Andrew'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Masha'},
                {id: 6, name: 'Kostan'},
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.contentPage = contentPageReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};


export default store; 

window.store = store;