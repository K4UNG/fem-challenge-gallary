import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("html").classList.add("no-scroll");
  }, []);

  return (
    <motion.div
      className="wrapper home"
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.36, -0.02, 0.68, 1] }}
    >
      <Hero />
      <Featured />
      <motion.div
        className="panel"
        animate={{
          scaleY: 0,
          transition: {
            duration: 1,
            ease: [0.52, 0.3, 0.81, 0.52],
            delay: 2.2,
          },
        }}
        onAnimationComplete={() =>
          document.querySelector("html").classList.remove("no-scroll")
        }
      />
      <motion.div
        className="panel2"
        animate={{
          scaleY: 0,
          transition: {
            duration: 1.2,
            ease: [0.36, -0.02, 0.68, 1],
            delay: 2,
          },
        }}
      >
        <div>
          HELLO!
          <motion.div
            initial={{ top: "100%" }}
            animate={{ top: 0 }}
            transition={{ delay: 1.9, duration: 0.5, ease: "easeInOut" }}
            className="mask"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
