import React, { useState } from "react";
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
    const [teamName, setTeamName] = useState("");
    const [teamDescription, setTeamDescription] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Team.js Test enter sumbit: " + teamName, teamDescription, selectedHeroes, user_id);
        try {
            const response = await fetch("http://127.0.0.1:5000/api/create-team", {
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
            console.log(data);
            onResetHeroes();
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    );
};

export default Team;
