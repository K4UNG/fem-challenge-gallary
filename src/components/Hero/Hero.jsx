import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const parentVariant = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.5,
      },
    },
  };

  const childVariant = {
    initial: {
      opacity: 0,
      y: -30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.36, -0.02, 0.68, 1],
      },
    },
  };

  const transition = {
    duration: 1.5,
    ease: [0.36, -0.02, 0.68, 1],
    delay: 2.5,
  }

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.wrapper}
        variants={parentVariant}
        animate="animate"
        initial="initial"
      >
        <div className={styles.wrapper__inner}>
          <motion.img
            variants={childVariant}
            className={styles.bg}
            src="./images/mobile.svg"
            alt="mobile background pattern"
          />
          <motion.img
            variants={childVariant}
            className={styles.logo}
            src="./images/logo.svg"
            alt="logo"
          />

          <motion.p
            variants={childVariant}
            className={styles.text + " " + styles.text1}
          >
            Hey there! My name is <span>Kaung Zin Hein</span> and I'm a frontend
            developer from Myanmar.{" "}
            <a
              href="https://www.frontendmentor.io"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </a>{" "}
            has been a huge part in my journey as a programmer. Here, you can
            see all of my finished challenges from{" "}
            <a
              href="https://www.frontendmentor.io"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </a>
            .
          </motion.p>
        </div>

        <motion.div variants={childVariant} className={styles.buttons}>
          <Link className={styles.button} to="/projects">
            view projects
          </Link>
          <br />
          <a
            className={styles.button}
            href="https://www.example.com"
            rel="noreferrer"
            target="_blank"
          >
            portfolio
          </a>
        </motion.div>

        <div className={styles.text__wrapper}>
          <motion.p
            variants={childVariant}
            className={styles.text + " " + styles.text2}
          >
            These challenges range from simple cards, landing pages to more
            advanced games and apps which tremendously helped me explore
            Frontend web during my early days.
          </motion.p>
        </div>
      </motion.div>

      <div className={styles.background}>
        <div>
          <motion.img
            initial={{ scale: 1.5 }}
            animate={{
              scale: 1,
              transition
            }}
            src="./images/background.png"
            alt="background wave"
          />
          <motion.div className="mask" animate={{scaleY: 0}} transition={transition} />
        </div>
        <svg
          className={styles.kaung}
          width="70"
          height="344"
          viewBox="0 0 70 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ fillOpacity: 0 }}
            animate={{
              fillOpacity: 0.1,
              transition: {
                delay: 3,
                ease: [0.36, -0.02, 0.68, 1],
                duration: 0.5,
              },
            }}
            d="M69 302.631L39.528 322.407L69 322.407L69 343.719L1.032 343.719L1.032 322.407L29.64 322.407L1.032 302.919L1.032 278.823L33.576 302.247L69 277.287L69 302.631ZM58.728 220.466L58.728 243.122L69 246.482L69 268.85L1.03199 243.986L1.03199 219.41L69 194.642L69 217.106L58.728 220.466ZM42.696 225.65L23.784 231.794L42.696 237.938L42.696 225.65ZM1.03199 161.768L39.336 161.768C42.472 161.768 44.968 161.096 46.824 159.752C48.616 158.344 49.512 156.104 49.512 153.032C49.512 149.96 48.616 147.688 46.824 146.216C44.968 144.744 42.472 144.008 39.336 144.008L1.03199 144.008L1.03199 122.792L39.336 122.792C45.8 122.792 51.336 124.136 55.944 126.824C60.488 129.512 63.912 133.192 66.216 137.864C68.52 142.536 69.672 147.752 69.672 153.512C69.672 159.272 68.52 164.392 66.216 168.872C63.912 173.288 60.488 176.744 55.944 179.24C51.4 181.736 45.864 182.984 39.336 182.984L1.03199 182.984L1.03199 161.768ZM69 41.216L69 62.528L34.824 85.088L69 85.088L69 106.4L1.03199 106.4L1.03199 85.088L35.784 62.528L1.03199 62.528L1.03199 41.216L69 41.216ZM24.264 -17.2765C22.92 -16.4445 21.896 -15.2605 21.192 -13.7245C20.424 -12.1885 20.04 -10.3325 20.04 -8.15651C20.04 -4.06051 21.384 -0.892505 24.072 1.34749C26.696 3.58749 30.312 4.70749 34.92 4.70749C40.232 4.70749 44.2 3.45949 46.824 0.963496C49.448 -1.5325 50.76 -5.37251 50.76 -10.5565C50.76 -15.4845 48.776 -19.4525 44.808 -22.4605L44.808 -5.46851L29.736 -5.46851L29.736 -40.1245L51.048 -40.1245C56.104 -37.1805 60.456 -33.1165 64.104 -27.9325C67.688 -22.7485 69.48 -16.1885 69.48 -8.25251C69.48 -1.21251 68.04 4.93149 65.16 10.1795C62.216 15.3635 58.12 19.3635 52.872 22.1795C47.624 24.9315 41.64 26.3075 34.92 26.3075C28.2 26.3075 22.216 24.9315 16.968 22.1795C11.72 19.3635 7.65598 15.3635 4.77598 10.1795C1.83198 4.9955 0.359981 -1.0845 0.359981 -8.0605C0.359981 -16.9565 2.50398 -24.1885 6.79198 -29.7565C11.08 -35.3885 16.904 -38.7165 24.264 -39.7405L24.264 -17.2765Z"
            fill="#00E3B3"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
