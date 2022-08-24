import styles from "./Detail.module.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import Back from "../components/Back/Back";
import HomeBtn from "../components/HomeBtn/HomeBtn";
import { motion } from "framer-motion";

export default function Detail() {
  const data = require("../data.json");
  const { id } = useParams();

  const item = data.filter((item) => item.id === id)[0];
  const diff = ["newbie", "junior", "intermediate", "advanced"];
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.36, -0.02, 0.68, 1] }}
      className={`wrapper ${styles.wrapper}`}
    >
      <div className={styles.head}>
        <Back onClick={() => navigate(-1)} className={styles.back} />
        <HomeBtn />
        <div className={styles.date}>{item.date.replace(/-/g, " ")}</div>
      </div>

      <h1 className={styles.title}>{item.title}</h1>
      <div className={styles.tags}>
        <span>{diff[item.difficulty - 1]}</span>
        {item.tags.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>

      <img
        src={item.src}
        alt={item.title}
        className={styles.image}
      />

      <div className={styles.links}>
        <a href={item.live} target="_blank" rel="noreferrer">
          live demo
        </a>
        <a href={item.repo} target="_blank" rel="noreferrer">
          github repo
        </a>
        <a href={item.solution} target="_blank" rel="noreferrer">
          fem solution
        </a>
      </div>

      <p className={styles.description}>{item.description}</p>

      <Link className={styles.next} to={"/projects/" + item.next}>
        <span>
          view next
          <br />
          {item.next.replace(/-/g, " ")}
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
    </motion.div>
  );
}
