import Filter from "../components/Filter/Filter";
import Project from "../components/Project/Project";
import styles from "./Projects.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [sort, setSort] = useState("date");
  const [group, setGroup] = useState([]);

  const data = require("../data.json");

  if (sort === "difficulty") {
    data.sort((a, b) => b.difficulty - a.difficulty);
  } else if (sort === "date") {
    const now = new Date();
    data.sort((a, b) => now - new Date(a.date) - (now - new Date(b.date)));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{duration: .5, ease: [0.36, -0.02, 0.68, 1]}}
      className="wrapper"
    >
      <Filter sort={sort} setSort={setSort} group={group} setGroup={setGroup} />

      <div className={styles.projects}>
        <AnimatePresence>
        {data
          .filter(
            (item) =>
              group.every((i) => item.tags.includes(i)) || group.length === 0
          )
          .map((item) => {
            return (
              <Project
                key={item.id}
                title={item.title}
                id={item.id}
                src={item.src}
                live={item.live}
              />
            );
          })}
          </AnimatePresence>
      </div>
    </motion.div>
  );
}
