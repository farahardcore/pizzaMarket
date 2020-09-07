import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Menu from "./Components/Menu/Menu";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
