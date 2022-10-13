import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Register";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import ItemCard from "./Components/Items/Items";

function App() {
  return (
    <div className="container mx-auto">
      <Container>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/items" element={<ItemCard />} />
        </Routes>
        <Items />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
