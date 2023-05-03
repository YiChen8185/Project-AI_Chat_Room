import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import App from "./App";
import ChatPage from "./pages/ChatPage";
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
                        element={<App />}
                    />
                    <Route
                        path="/ChatPage"
                        element={<ChatPage />}
                    />    
                </Routes>
            </Router>
        </di>
    );
};

export default BeforeApp;