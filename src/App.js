import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidedrawer from "./components/Sidedrawer";
import Backdrop from "./components/Backdrop";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import WishlistScreen from "./Screens/WishlistScreen";
import ParticularProductScreen from "./Screens/Particular-productScreen";

function App() {
  const [SideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={()=> setSideToggle(true)}/>
      <Sidedrawer show={SideToggle} click={()=> setSideToggle(false)}/>
      <Backdrop show={SideToggle} click={()=> setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/products" element={<ProductScreen />} />
          <Route exact path="/wishlist" element={<WishlistScreen />} />
          <Route exact path="/products/:id" element={<ParticularProductScreen />} />
        </Routes>
      </main>
      {/* footer */}
    </Router>
  );
}

export default App;
