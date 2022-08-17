import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="wrapper">
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
      />
      <motion.div
        className="panel2"
        animate={{
          scaleY: 0,
          transition: {
            duration: 1.2,
            ease: [.36,-0.02,.68,1],
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
    </div>
  );
}
