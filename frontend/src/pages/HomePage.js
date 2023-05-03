import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/second');
  };

  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Second Page</button>
    </div>
  );
};

export default HomePage;
