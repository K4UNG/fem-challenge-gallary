import Filter from "../components/Filter/Filter";
import Project from "../components/Project/Project";
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className="wrapper">
      <Filter />

      <div className={styles.projects}>
        <Project
          title="tip calculator"
          id="tip-calculator"
          src="./images/tip.png"
          live="https://k4ung21.netlify.app"
        />
        <Project
          title="tip calculator"
          id="tip-calculator"
          src="./images/tip.png"
          live="https://k4ung21.netlify.app"
        />
        <Project
          title="tip calculator"
          id="tip-calculator"
          src="./images/tip.png"
          live="https://k4ung21.netlify.app"
        />
        <Project
          title="tip calculator"
          id="tip-calculator"
          src="./images/tip.png"
          live="https://k4ung21.netlify.app"
        />
      </div>
    </div>
  );
}
