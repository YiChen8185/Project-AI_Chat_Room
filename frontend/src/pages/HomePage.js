import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const HomePage = props => {
    const [name, setTeamName] = useState("");
    const [description, setDescription] = useState("");

    const handleTeamCreate = (e) => {
      e.preventDefault(); 
      createTeam(name, description, props.userID);
    };
  
    const createTeam = async (name, description, user_id) => {
      console.log("team_log1: " + name, description);
      try {
        const resp = await fetch("http://localhost:5000/y/create-team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            description: description,
            user_id: user_id,
          }),
        });
        const response = await resp.json();
        console.log("teamCreate" + response);
      } catch (error) {
        console.log(error.message);
      }
    };

    const logoutUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
      });
      const res = await response.json();
      props.logOut();
    };

    useEffect(() => {
      console.log("isSignedIn: " + props.isSignedIn);
      console.log("HomePage userID: " + props.userID)
    }, [props.isSignedIn]);

    return (
        <div>
        <h1>Test</h1>
        <p>1234567890</p>
        <div className="button-span">
          {props.isSignedIn && ( 
            <div>
              <div>
                <button onClick={logoutUser}>loggout</button>
              </div>
              <div>
              <form onSubmit={handleTeamCreate}>
                <h3 align="center">Create Team</h3>
                <div>
                  <label>TeamName: </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter TeamName"
                    id=""
                  />
                </div>
        
                <div>
                  <label>Description: </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    id=""
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <div>
                <Link className="button" to="/TeamCreatePage">CheckTeam</Link>
              </div>
              </div>
            </div>
          )}
          {!props.isSignedIn &&(
            <div>
              <div>
                <a className="button is-primary is-large" href="/LoginPage">Login</a>
              </div>
              <div>
                <a className="button" href="/RegisterPage">Register</a>
              </div>
            </div>  
          )}
        </div>
      </div>
    );
};

export default HomePage;