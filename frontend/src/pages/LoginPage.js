import { useState } from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import './../components/BackToHome.js'
import BackToHome from "./../components/BackToHome.js";

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = async () => {
        try {
            const resp = await fetch("https://guangwei.azurewebsites.net/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await resp.json();
            if (data.user_id != null) {
                props.onLogin();
                props.onUserID(data.user_id);
                navigate("/");
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.log(error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login();
    };

    return (
        <div className="login-container">
            <h1 >Login</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="back">
                <BackToHome />
            </div>
        </div>
    );
};

export default LoginPage;
