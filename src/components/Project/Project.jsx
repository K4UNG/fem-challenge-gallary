import styles from "./Project.module.css";
import { Link } from "react-router-dom";

export default function Project({ src, title, live, id }) {
  return (
    <div className={styles.project}>
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
      <h2 className={styles.title}>title</h2>
    </div>
  );
}
