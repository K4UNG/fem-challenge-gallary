import styles from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className={styles.featured}>
      <h2 className={styles.title}>FEATURED PROJECTS</h2>

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
