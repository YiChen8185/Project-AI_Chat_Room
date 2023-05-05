// TestGetTeam.js
import { useEffect, useState } from "react";
import "./TestGetTeam.css";
import getHistoryFromBackend from "./ChatWindow.js";

import Hero from "./Hero";

const TestGetTeam = (props) => {
    const [teams, setTeams] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);
    const user_id = props.userID;

    const getTeam = async () => {
        try {
            const resp = await fetch("https://guangwei.azurewebsites.net/get-teams", {
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

    const getHistoryFromBackend = async (id) => {
        // const team_id = props.team_id;
        const team_id = id;
        // 又到这个，且有id
        if (team_id != null) {
            const response = await fetch("https://guangwei.azurewebsites.net/get-history", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                team_id: team_id, 
                }),
            });
            const data = await response.json();
            console.log(data.history);
            if(data.history != null){
                props.setMessages(data.history);
            }
            else{
                props.setMessages([]);
            }
        }
        
      };

    const getMemberImage = (memberName) => {
        switch (memberName) {
          case "Product Manager":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827009865515008/1.png";
          case "Software Engineer":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827010096222218/2.png";
          case "Data Scientist":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827010373025882/3.png";
          case "UI/UX Designer":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827010641477732/4.png";
          case "22C Chef":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827010981220503/5.png";
          case "Tech Leader":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827011291578490/6.png";
          case "Illustrators":
            return "https://cdn.discordapp.com/attachments/1087969015370108938/1103827011597783070/7.png";
          default:
            return ""; // Return a default image URL or an empty string if the member name is not found
        }
    };
    

    useEffect(() => {
        console.log("UserID: " + props.userID);
        getTeam();
    }, []);

    const handleTeamClick = (team) => {
        setSelectedTeam(team);
        props.onTeamID(team.id);
        getHistoryFromBackend(team.id);
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
                            maskCopy={getMemberImage(member)}
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
