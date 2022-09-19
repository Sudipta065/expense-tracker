import React from "react";
import Home from "./pages/home";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense";
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
