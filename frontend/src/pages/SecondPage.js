import logo from './../logo.svg';
import './SecondPage.css';

import Header from './../components/Header';
import ChatWindow from './../components/ChatWindow';

function SecondPage() {
    return (
        <div className="page-container">
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
        </div>
    );
}

export default SecondPage;
