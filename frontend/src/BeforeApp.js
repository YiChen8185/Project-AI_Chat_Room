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

const BeforeApp = () => {
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
                        element={<HomePage />}
                    />
                    <Route
                        path="/RegisterPage"
                        element={<RegisterPage />}
                    />
                    <Route
                        path="/LoginPage"
                        element={<LoginPage />}
                    />
                </Routes>
            </Router>
        </di>
    );
};

export default BeforeApp;