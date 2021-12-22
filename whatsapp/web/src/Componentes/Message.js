import React from 'react';
import Chat from './Chat';
import './Message.css';
import Sidebar from './Sidebar';
import ChatInicio from './ChatInicio';

import { useAuthState } from '../reducers/userReducer';

const Message = () => {
    const { group_chat } = useAuthState(); 
    
    return (
        <div className="message">
            <div className="message__movil">
                {
                    group_chat? <Chat /> : <Sidebar /> 
                }
            </div>

            <div className="message__desktop">
                <aside className="message__sidebar">
                    <Sidebar />
                </aside>
                <aside className="message__chat">
                    {
                        group_chat? <Chat /> : <ChatInicio />
                    }       
                </aside>
            </div>
        </div>
    )
}

export default Message;