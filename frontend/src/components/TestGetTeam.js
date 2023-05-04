import { useEffect } from "react"
import { useState } from "react";

const TestGetTeam = (props) => {
    const [teams, setTeams] = useState("");
    const user_id = props.userID;

    const getTeam = async () => {
        try {
          const resp = await fetch("http://localhost:5000/get-teams", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user_id,
            }),
          });
          const responce = await resp.json();
          console.log("teamCreate", JSON.stringify(responce.teams, null, 2));
          setTeams(responce.teams);
        } catch (error) {
          console.log(error.message);
        }
    };  

    useEffect (() => {
        console.log("UserID: " + props.userID);
        getTeam();
    }
    , []);
    return (
        <div>
            <p>TestGetTeam</p>
            {Array.isArray(teams) && teams.map((team, index) => (
                <div key={index}>
                    <h4>{team.name}</h4>
                    <p>{team.description}</p>
                    <p>Members:</p>
                    <ul>
                        {team.members.map((member, index) => (
                            <li key={index}>{member}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
    
}

export default TestGetTeam