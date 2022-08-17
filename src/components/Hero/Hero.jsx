import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <img
          className={styles.bg}
          src="./images/mobile.svg"
          alt="mobile background pattern"
        />
        <img className={styles.logo} src="./images/logo.svg" alt="logo" />

        <p className={styles.text}>
          Hey there! My name is <span>Kaung Zin Hein</span> and I'm a frontend
          developer from Myanmar.{" "}
          <a
            href="https://www.frontendmentor.io"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>{" "}
          has been a huge part in my journey as a programmer. Here, you can see
          all of my finished challenges from{" "}
          <a
            href="https://www.frontendmentor.io"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>

        <div className={styles.buttons}>
          <Link className={styles.button} to="/projects">
            view projects
          </Link>
          <br />
          <a
            className={styles.button}
            href="/"
            rel="noreferrer"
            target="_blank"
          >
            portfolio
          </a>
        </div>

        <p className={styles.text}>
          These challenges range from simple cards, landing pages to more
          advanced games and apps. They tremendously helped me build up my
          JavaScript knowledge during my early days as a web developer.
        </p>
      </div>

    <div className={styles.background}>
        <img src="./images/background.png" alt="background wave" />
    </div>

    </section>
  );
}
