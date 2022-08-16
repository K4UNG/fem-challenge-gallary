import styles from "./Featured.module.css";
import { Link } from "react-router-dom";

export default function FeaturedItem({
  id,
  number,
  title,
  src,
  live,
  repo,
  tags,
  difficulty,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div>/{number}</div>
        <h3>{title}</h3>
      </div>
      <Link to={`projects/${id}`} className={styles.image}>
        <img src={src} alt={title} />
      </Link>

      <div className={styles.bottom}>
        <div className={styles.buttons}>
          <a tabIndex="0" href={live} target="_blank" rel="noreferrer">
            live
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            demo
          </a>
        </div>

        <div className={styles.tags}>
          {difficulty}
          <div className={styles.line} />
          {tags[0]}
          <div className={styles.line} />
          {tags[1]}
        </div>
      </div>
    </div>
  );
}
