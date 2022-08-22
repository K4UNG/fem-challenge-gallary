import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<h1>project</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
