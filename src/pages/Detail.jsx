import styles from "./Detail.module.css";
import { useNavigate, Link } from "react-router-dom";
import Back from "../components/Back/Back";
import HomeBtn from "../components/HomeBtn/HomeBtn";

export default function Detail() {
  const navigate = useNavigate();
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <div className={styles.head}>
        <Back onClick={() => navigate(-1)} className={styles.back} />
        <HomeBtn />
        <div className={styles.date}>25. 4. 2022</div>
      </div>

      <h1 className={styles.title}>tip calculator</h1>
      <div className={styles.tags}>
        <span>intermediate</span>
        <span>React</span>
        <span>SCSS</span>
      </div>

      <img src="/images/tip.png" alt="tip" className={styles.image} />

      <div className={styles.links}>
        <a href="https://example.com">live demo</a>
        <a href="https://example.com">github repo</a>
        <a href="https://example.com">fem solution</a>
      </div>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
        suscipit provident repudiandae! Distinctio eveniet voluptatum nam
        similique est necessitatibus sint!
      </p>

      <Link className={styles.next} to="/projects/tip">
        <span>
          view next
          <br />
          tip calculator
        </span>{" "}
        <svg
          width="35"
          height="35"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.6933"
            cy="10.5239"
            r="9.62629"
            stroke="#242936"
            strokeWidth="0.85567"
          />
          <path
            d="M4.91748 10.7379H16.469M16.469 10.7379L14.4001 13.3049M16.469 10.7379L14.4001 8.1709"
            stroke="#242936"
            strokeWidth="0.85567"
          />
        </svg>
      </Link>
    </div>
  );
}