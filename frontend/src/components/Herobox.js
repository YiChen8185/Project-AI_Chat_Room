import React from "react";
import styles from "./Herobox.module.css";
import Hero from "./Hero";
import img1 from "./../assets/img/1.png"
import img2 from "./../assets/img/2.png"
import img3 from "./../assets/img/3.png"
import img4 from "./../assets/img/4.png"
import img5 from "./../assets/img/5.png"
import img6 from "./../assets/img/6.png"
import img7 from "./../assets/img/7.png"

const Herobox = ({ title = "AI Hero box:", onHeroClick, onResetHeroes }) => {
  return (
    <div className={styles.herobox}>
      <Hero maskCopy={img1} canada="Product Manager" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img2} canada="Software Engineer" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img3} canada="Data Scientist" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img4} canada="UI/UX Designer" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img5} canada="22C Chef" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img6} canada="Tech Leader" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy={img7} canada="Illustrators" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
    </div>
  );
};

export default Herobox;
