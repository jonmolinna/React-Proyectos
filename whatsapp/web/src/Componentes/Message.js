import React from 'react';
import Chat from './Chat';
import './Message.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatInicio from './ChatInicio';

const Message = ({ userName }) => {  
    
    return (
        <div className="message">
            <Router>
                <div className="message__movil">
                    <Route exact path="/">
                        <Sidebar />
                    </Route>
                    <Route exact path="/group/:id">
                        <Chat userName={userName} />
                    </Route>
                </div>

                <div className="message__desktop">
                    <aside className="message__sidebar">
                        <Sidebar />
                    </aside>
                    <aside className="message__chat">
                        <Route exact path="/group/:id">
                            <Chat userName={userName} />
                        </Route>
                        <Route exact path="/">
                            <ChatInicio userName={userName} />
                        </Route>
                        
                    </aside>
                </div>
            </Router>
        </div>
    )
}

export default Message;