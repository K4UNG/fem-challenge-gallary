import Filter from "../components/Filter/Filter";
import Project from "../components/Project/Project";

export default function Projects() {
  return (
    <div className="wrapper">
      <Filter />

      <Project
        title="tip calculator"
        id="tip-calculator"
        src="./images/tip.png"
        live="https://k4ung21.netlify.app"
      />
    </div>
  );
}
