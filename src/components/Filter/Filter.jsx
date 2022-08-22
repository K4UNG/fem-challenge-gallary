import styles from "./Filter.module.css";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        <div className={styles.filter__desktop}>
          <div className={styles.label}>sort by</div>
          <div className={styles.sort__wrapper}>
            <button>date <span className={styles.marker} /></button>
            <br/>
            <button>difficutly <span className={styles.marker} /></button>
          </div>
        </div>

        <div>
          <Link to="/" className={styles.home}>
            <img src="./images/home.svg" alt="home icon" />
          </Link>
        </div>

        <div className={styles.filter__desktop}>
          <div className={styles.label}>group by</div>
          <div className={styles.group__wrapper}>
            <button>SCSS</button>
            <button>REACT</button>
            <button>CSS</button>
            <button>JAVASCRIPT</button>
          </div>
        </div>
      </div>

      <div className={styles.filter__mobile}>
        <div className={styles.dropdown}>
          <label htmlFor="sort">sort by</label>
          <br />
          <select id="sort">
            <option value="date">date</option>
            <option value="difficulty">difficulty</option>
          </select>
        </div>

        <div className={styles.dropdown}>
          <label htmlFor="group">group by</label>
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
