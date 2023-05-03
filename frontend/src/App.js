import React, { useState, useRef } from "react";
import "./App.css";

import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Herobox from "./components/Herobox";
import myImg from "./assets/img/23117.png";

import { useNavigate } from "react-router-dom";

function App() {
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const resetHeroesRef = useRef();
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/ChatPage")
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>AI Team</h3>
      </header>
      <div className="App-Content">
        <Herobox onHeroClick={handleHeroClick} onResetHeroes={(resetFn) => (resetHeroesRef.current = resetFn)} />
        <div className="circle-image">
          <img src={myImg} alt="My Image" />
        </div>
        <Team selectedHeroes={selectedHeroes} onResetHeroes={handleResetHeroes} />
        <button className="cta1" onClick={handleSubmit}>
          <p className="labelTwo1">Go to Chat</p>
        </button>
      </div>
    </div>
  );
}

export default App;
