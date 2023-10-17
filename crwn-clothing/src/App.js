import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
