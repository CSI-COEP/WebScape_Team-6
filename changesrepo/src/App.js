import React from "react";
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Menu></Menu>
      <Products></Products>
      <About></About>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
