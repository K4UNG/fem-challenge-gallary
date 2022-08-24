import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import Page404 from "./pages/Page404";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
