import { useState } from "react";
import "./RegisterPage.css";
import BackToHome from "./../components/BackToHome.js";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("https://guangwei.azurewebsites.net/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          password1,
          password2,
        }),
      });
      const data = await resp.json();
      if (data.created === true) {
        window.location.href = "/";
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <h3 align="center">Sign Up</h3>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password: </label>
            <input
              type="password"
              className="form-control"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Enter password"
              id="password1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Password (Confirm): </label>
            <input
              type="password"
              className="form-control"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm password"
              id="password2"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="back">
        <BackToHome />
      </div>
    </div>
  );
};

export default RegisterPage;
