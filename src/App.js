import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Header from "./shared/Header";
import TopSection from "./components/TopSection";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TopSection />
      <About />
      <Services />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
