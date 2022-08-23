import styles from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Featured() {
  const data = require("../../data.json");

  const diff = ["newbie", "junior", "intermediate", "advanced"];

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
        {data
          .filter((item) => item.featured)
          .map((item, i) => (
            <FeaturedItem
              key={item.id}
              number={"0" + (i + 1).toString()}
              title={item.title}
              src={item.src}
              live={item.live}
              repo={item.repo}
              id={item.id}
              difficulty={diff[item.difficulty - 1]}
              tags={item.tags}
            />
          ))}
      </div>

      <div className={styles.all__wrapper}>
        <Link to="/projects" className={styles.all}>
          see all projects
        </Link>
      </div>
    </div>
  );
}
