import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>AI Team</h3>
      </header>
      <div className="App-Content">
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

export default App;
