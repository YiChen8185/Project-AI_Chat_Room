import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const logoutUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
      });
      const res = await response.json();
      setIsSignedIn(res.is_authenticated);
      console.log(res);
    };

    useEffect(() => {
      (async () => {
        const response = await fetch("http://127.0.0.1:5000/@me");
        const res = await response.json();
        if(res.email != null) {
        setIsSignedIn(true);
        }
        else{
          setIsSignedIn(false);
        }
      })();
    }, []);

    return (
        <div>
        <h1>Test</h1>
        <p>1234567890</p>
        <div className="button-span">
          {isSignedIn ? ( 
            <div>
              <button onClick={logoutUser}>loggout</button>
            </div>
          ): (
            <div>
              <div>
                <a className="button is-primary is-large" href="/LoginPage">Login</a>
              </div>
              <a className="button" href="/RegisterPage">Register</a>
            </div>  
          )}
        </div>
      </div>
    );
};

export default HomePage;