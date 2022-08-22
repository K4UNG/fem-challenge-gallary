import styles from "./Filter.module.css";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        <div className={styles.filter__desktop}></div>
        <div>
          <Link to="/" className={styles.home}>
            <img src="./images/home.svg" alt="home icon" />
          </Link>
        </div>
        <div className={styles.filter__desktop}></div>
      </div>

      <div className={styles.filter__mobile}>
        <div className={styles.dropdown}>
          <label for="sort">sort by</label>
          <br />
          <select id="sort">
            <option value="date">date</option>
            <option value="difficulty">difficulty</option>
          </select>
        </div>

        <div className={styles.dropdown}>
          <label for="group">group by</label>
          <br />
          <select id="group">
            <option value="react">React</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="scss">SCSS</option>
          </select>
        </div>
      </div>
    </div>
  );
}
