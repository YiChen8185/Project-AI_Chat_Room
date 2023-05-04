// TestGetTeam.js
import { useEffect, useState } from "react";
import "./TestGetTeam.css";

import Hero from "./Hero";

const TestGetTeam = (props) => {
    const [teams, setTeams] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);
    const user_id = props.userID;

    const getTeam = async () => {
        try {
            const resp = await fetch("http://127.0.0.1:5000/get-teams", {
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

    useEffect(() => {
        console.log("UserID: " + props.userID);
        getTeam();
    }, []);

    const handleTeamClick = (team) => {
        setSelectedTeam(team);
    };

    return (
        <div className="test-get-team">
            <div className="team-list">
                {Array.isArray(teams) &&
                    teams.map((team, index) => (
                        <div
                            key={index}
                            className={`team-name ${selectedTeam && selectedTeam.name === team.name
                                ? "selected"
                                : ""
                                }`}
                            onClick={() => handleTeamClick(team)}
                        >
                            {team.name}
                        </div>
                    ))}
            </div>
            {selectedTeam && (
                <div className="team-details">
                    {selectedTeam.members.map((member, index) => (
                        <Hero
                            canada={member}
                            num200Destinations="🟢"
                            onHeroClick={() => console.log("Hero clicked:", member)}
                            onResetHeroes={(reset) => console.log("Reset Heroes")}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TestGetTeam;
