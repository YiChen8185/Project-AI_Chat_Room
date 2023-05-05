import React, { useState, useRef } from "react";
import "./App.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Herobox from "./components/Herobox";
import myImg from "./assets/img/23117.png";

import { useNavigate } from "react-router-dom";

// 把userID带入到ChatPage里

// 把function改成const
const App = props => {
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const resetHeroesRef = useRef();
  const navigate = useNavigate();
  const [name, setTeamName] = useState("");
  const [description, setDescription] = useState("");

  const handleHeroClick = (heroName, isSelected) => {
    if (isSelected) {
      setSelectedHeroes([...selectedHeroes, heroName]);
    } else {
      setSelectedHeroes(selectedHeroes.filter((member) => member !== heroName));
    }
  };

  const handleResetHeroes = () => {
    if (resetHeroesRef.current) {
      resetHeroesRef.current();
    }
  };

  const logoutUser = async () => {
    const response = await fetch("https://guangwei.azurewebsites.net/logout", {
      method: "POST",
    });
    const responce = await response.json();
    console.log(responce);
    props.logOut();
  };

  useEffect(() => {
    console.log("isSignedIn: " + props.isSignedIn);
    console.log("HomePage userID: " + props.userID)
  }, [props.isSignedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/ChatPage")

  };

  return (
    <div className="App">
        <header className="App-header">
        <div className="header-container">
          <div className="header-left"></div>
          <h3 className="header-center">AI Team</h3>
          {!props.isSignedIn && (
            <div className="header-right">
              <div>
                <Link className="login" to="/LoginPage">Login</Link>
              </div>
              <div>
                <Link className="register" to="/RegisterPage">Register</Link>
              </div>
            </div>
          )}
          {props.isSignedIn && (
            <div className="header-right" >
              <button onClick={logoutUser} >loggout</button>
            </div>
          )}
        </div>
      </header>

      <div className="App-Content">
        <div className="circle-image">
          <img src={myImg} alt="My Image" />
        </div>
        {props.isSignedIn && (
          <div>
            <Herobox onHeroClick={handleHeroClick} onResetHeroes={(resetFn) => (resetHeroesRef.current = resetFn)} />
            <Team
              selectedHeroes={selectedHeroes}
              onResetHeroes={handleResetHeroes}
              user_id={props.userID}
            />
            <button className="cta1" onClick={handleSubmit}>
              <p className="labelTwo1">Go to Chat</p>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
