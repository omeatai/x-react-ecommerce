import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
