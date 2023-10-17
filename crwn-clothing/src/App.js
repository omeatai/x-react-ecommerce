import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
