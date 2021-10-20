import React from "react";
import Header from "./shared/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
