import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

//
