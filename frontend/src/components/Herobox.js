import React from "react";
import styles from "./Herobox.module.css";
import Hero from "./Hero";

const Herobox = ({ title = "AI Hero box:", onHeroClick, onResetHeroes }) => {
  return (
    <div className={styles.herobox}>
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827009865515008/1.png" canada="Product Manager" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827010096222218/2.png" canada="Software Engineer" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827010373025882/3.png" canada="Data Scientist" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827010641477732/4.png" canada="UI/UX Designer" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827010981220503/5.png" canada="22C Chef" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827011291578490/6.png" canada="Tech Leader" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
      <Hero maskCopy="https://cdn.discordapp.com/attachments/1087969015370108938/1103827011597783070/7.png" canada="Illustrators" onHeroClick={onHeroClick} onResetHeroes={onResetHeroes} />
    </div>
  );
};

export default Herobox;
