import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
  );
}

export default App;
