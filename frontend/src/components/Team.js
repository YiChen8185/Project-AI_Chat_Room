import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";

const Team = ({
    name = "Team Name:",
    buttontxt = "Create Team",
    description = "Description:",
    subtitle = "Welcome back. Enter your credentials to access your account",
    title = "Your Team:",
    selectedHeroes,
    onResetHeroes,
    user_id
}) => {
    const [teams, setTeams] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamDescription, setTeamDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://guangwei.azurewebsites.net/api/create-team", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: teamName,
                    description: teamDescription,
                    members: selectedHeroes,
                    user_id: user_id,
                }),
            });
            const data = await response.json();
            setErrorMessage(data.message);
            console.log("teamCreate! ", JSON.stringify(data));
            getTeam();
            onResetHeroes();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getTeam();
    }, []);

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
    }

    return (
        <div className={styles.selectCountry}>
            <div className={styles.country}>
                <p className={styles.label}>{name}</p>
                <input
                    className={styles.textInput}
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
            </div>
            <div className={styles.country}>
                <p className={styles.label}>{description}</p>
                <textarea
                    className={styles.textArea}
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                />
            </div>
            <button className={styles.cta} onClick={handleSubmit}>
                <p className={styles.labelTwo}>{buttontxt}</p>
            </button>
            {/* {errorMessage && <p className={styles.errormessage2}>{errorMessage}</p>} */}
            {errorMessage && (
                <div className={styles.messagecontainer}>
                    <p
                        className={
                            errorMessage === "Team created successfully"
                                ? styles.successmessage
                                : errorMessage === "Team already exists."
                                    ? styles.errormessage
                                    : ""
                        }
                    >
                        {errorMessage}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Team;
