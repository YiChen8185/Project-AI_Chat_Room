import React from "react";
import styles from "./Herobox.module.css";
import Hero from "./Hero";

const Herobox = ({ title = "AI Hero box:", onHeroClick, onResetHeroes }) => {
  return (
    <div className={styles.herobox}>
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
    </div>
  );
};

export default Herobox;
