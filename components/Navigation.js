import React from "react";
import styles from "../styles/Home.module.css";

function Navigation(props) {
  return (
    <div className={styles.navContainer}>
      <a className={styles.navButton} href={"#introduction"}>
        Introduction
      </a>
      <a className={styles.navButton} href={"#userResearch"}>
        User Research and Personas
      </a>
      <a className={styles.navButton} href={"#wireframe"}>
        Wireframe
      </a>
    </div>
  );
}

export default Navigation;
