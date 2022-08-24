import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Project({ src, title, live, id }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duation: 0.05 }}
      layout
      className={styles.project}
    >
      <div tabIndex="0" className={styles.container}>
        <img src={src} alt="id" />

        <div className={styles.hover}>
          <div className={styles.buttons}>
            <a target="_blank" rel="noreferrer" href={live}>
              live
            </a>
            <Link to={"/projects/" + id}>more</Link>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </motion.div>
  );
}
