import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.css";
import Team from "./pages/Team/Team";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
