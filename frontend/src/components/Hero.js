import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = ({
    canada = "Canada",
    maskCopy = "https://static.overlay-tech.com/assets/8f52ac00-439f-476e-a17a-c79fb35429a7.png",
    num200Destinations = "200 Destinations",
    onHeroClick,
    onResetHeroes,
}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        onResetHeroes(() => setIsSelected(false));
      }, [onResetHeroes]);

    const handleClick = () => {
        setIsSelected(!isSelected);
        onHeroClick(canada, !isSelected);
    };

    return (
        <div
            className={`${styles.country} ${isSelected ? styles.selected : ""}`}
            onClick={handleClick}
        >
            <div className={styles.container}>
                <img alt="" className={styles.maskCopy} src={maskCopy} />
                <div className={styles.content}>
                    <p className={styles.canada}>{canada}</p>
                    <p className={styles.num200Destinations}>{num200Destinations}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
