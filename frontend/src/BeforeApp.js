import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TeamCreatePage from "./pages/TeamCreatePage";
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
                        path="/HomePage"
                        element={<HomePage 
                            isSignedIn={isSignedIn}
                            logOut={() => setIsSignedIn(false)}
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
                    <Route
                        path="/TeamCreatePage"
                        element={<TeamCreatePage 
                            userID = {userID}
                        />}
                    />
                </Routes>
            </Router>
        </di>
    );
};

export default BeforeApp;