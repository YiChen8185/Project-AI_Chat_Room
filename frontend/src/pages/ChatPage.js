import './ChatPage.css';

import Header from './../components/Header';
import ChatWindow from './../components/ChatWindow';
import TestGetTeam from './../components/TestGetTeam';
import { useEffect } from 'react';
import BackToHome from "./../components/BackToHome.js";

// function ChatPage()
const ChatPage = (props) => {

  useEffect (() => {
    console.log("UserID: " + props.userID);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>AI Team</h3>
      </header>
      <div className="App-Content1">
        <div className="left">
          <BackToHome />
          <p>team</p>
          <TestGetTeam userID={props.userID} />
        </div>
        <div className="right">
          <Header />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
