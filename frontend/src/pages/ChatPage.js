import './ChatPage.css';

import Header from './../components/Header';
import ChatWindow from './../components/ChatWindow';

function ChatPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>AI Team</h3>
      </header>
      <div className="App-Content1">
        <div className="left">
          <p>team</p>
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
