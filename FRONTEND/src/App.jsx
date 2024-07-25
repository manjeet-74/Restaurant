import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Success from "./Pages/Success.jsx";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster />
  </Router>
}

export default App