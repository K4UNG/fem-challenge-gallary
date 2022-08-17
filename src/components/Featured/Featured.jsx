import styles from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <div className={styles.featured}>
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{
          delay: 3,
          duration: 0.8,
          ease: [0.36, -0.02, 0.68, 1],
        }}
        className={styles.title}
      >
        FEATURED PROJECTS
      </motion.h2>

      <div className={styles.wrapper}>
        <FeaturedItem
          number="01"
          title="tip calculator"
          src="./images/tip.png"
          live="/"
          repo="/"
          id="someid"
          difficulty="Intermediate"
          tags={["React", "CSS"]}
        />
        <FeaturedItem
          number="02"
          title="tip calculator"
          src="./images/tip.png"
          live="/"
          repo="/"
          id="someid"
          difficulty="Intermediate"
          tags={["React", "CSS"]}
        />
        <FeaturedItem
          number="03"
          title="tip calculator"
          src="./images/tip.png"
          live="/"
          repo="/"
          id="someid"
          difficulty="Intermediate"
          tags={["React", "CSS"]}
        />
      </div>

      <div className={styles.all__wrapper}>
        <Link to="/projects" className={styles.all}>
          see all projects
        </Link>
      </div>
    </div>
  );
}
