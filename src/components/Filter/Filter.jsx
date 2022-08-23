import styles from "./Filter.module.css";
import HomeBtn from "../HomeBtn/HomeBtn";
import { motion } from "framer-motion";

export default function Filter({ sort, setSort, group, setGroup }) {
  const langs = ["SCSS", "React", "CSS"];

  const clickHandler = (lang) => {
    if (group.includes(lang)) {
      setGroup((prev) => prev.filter((i) => i !== lang));
    } else {
      setGroup((prev) => [...prev, lang]);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        <div className={styles.filter__desktop}>
          <div className={styles.label}>sort by</div>
          <div className={styles.sort__wrapper}>
            <button onClick={() => setSort("date")}>
              date{" "}
              {sort === "date" && (
                <motion.span layoutId="marker" className={styles.marker} />
              )}
            </button>
            <br />
            <button onClick={() => setSort("difficulty")}>
              difficutly
              {sort === "difficulty" && (
                <motion.span layoutId="marker" className={styles.marker} />
              )}
            </button>
          </div>
        </div>

        <div>
          <HomeBtn />
        </div>

        <div className={styles.filter__desktop}>
          <div className={styles.label}>group by</div>
          <div className={styles.group__wrapper}>
            {langs.map((lang) => (
              <Button
                key={lang}
                onClick={() => clickHandler(lang)}
                lang={lang}
                className={group.includes(lang) ? styles.selected : ""}
              />
            ))}
            <button
              onClick={() => clickHandler("JS")}
              className={group.includes("JS") ? styles.selected : ""}
            >
              JavaScript
            </button>
          </div>
        </div>
      </div>

      <div className={styles.filter__mobile}>
        <div className={styles.dropdown}>
          <label htmlFor="sort">sort by</label>
          <br />
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="date">date</option>
            <option value="difficulty">difficulty</option>
          </select>
        </div>

        <div className={styles.dropdown}>
          <label htmlFor="group">group by</label>
          <br />
          <select
            id="group"
            onChange={(e) => {
              const value = e.target.value
              if (value) setGroup([value]);
              else setGroup([])
            }}
          >
            <option value="">---</option>
            <option value="React">React</option>
            <option value="JS">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="SCSS">SCSS</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Button({ lang, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {lang}
    </button>
  );
}
