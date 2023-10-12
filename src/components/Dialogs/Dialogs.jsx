import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';import { Navigate } from 'react-router-dom';
;

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />)
    let messagesElements = state.messages.map(m => <Message text={m.text} key={m.id} /> )
    let newMessageBody = state.newMessageBody;

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    {props.isAuth === false && <Navigate to={'/login'}/>}

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}> 
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.text_field}>
                    <textarea 
                        onChange={ onMessageChange } 
                        placeholder='Enter your message...' 
                        value={newMessageBody}/>
                    <button onClick={ onSendMessageClick }>Send</button>                
                </div>
            </div>
        </div>
    );
}
export default Dialogs;