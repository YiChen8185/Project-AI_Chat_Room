import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import App from "./App";
import ChatPage from "./pages/ChatPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import React, { useState, useEffect } from "react";

const BeforeApp = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userID, setUserID] = useState("");
    return(
        <di>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<App 
                            isSignedIn={isSignedIn}
                            logOut={() => setIsSignedIn(false)}
                            userID = {userID}
                        />}
                    />
                    <Route
                        path="/ChatPage"
                        element={<ChatPage 
                            userID = {userID}
                        />}
                    />
                    <Route
                        path="/RegisterPage"
                        element={<RegisterPage />}
                    />
                    <Route
                        path="/LoginPage"
                        element={<LoginPage 
                            onLogin={() => {setIsSignedIn(true);}}
                            onUserID={(id) => {setUserID(id);}}
                        />}
                    />    
                </Routes>
            </Router>
        </di>
    );
};

export default BeforeApp;