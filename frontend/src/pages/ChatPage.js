import './ChatPage.css';

import Header from './../components/Header';
import ChatWindow from './../components/ChatWindow';
import TestGetTeam from './../components/TestGetTeam';
import { useEffect, useState } from 'react';
import BackToHome from "./../components/BackToHome.js";

// function ChatPage()
const ChatPage = (props) => {
  const [team_id, setTeam_id] = useState([]);
  const [messages, setMessages] = useState([]);

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
          {/* <BackToHome /> */}
          <TestGetTeam 
            userID={props.userID} 
            onTeamID={(id) => {setTeam_id(id);}}
            setMessages={(m) => {setMessages(m);}}
          />
        </div>
        <div className="right">
          <Header />
          <ChatWindow 
            team_id={team_id}
            messages={messages}
            setMessages={(m) => {setMessages(m);}}
          />
         </div>
        <div className="back">
          <BackToHome />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
