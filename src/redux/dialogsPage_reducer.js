const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, 
                newMessageBody: action.body       
            };

        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages, {id: 4, text: body }]            
            };

        default: 
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsPageReducer;