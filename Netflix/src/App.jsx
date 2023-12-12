import React from "react";
// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Row_Post/RowPost";
import { originals,action,RomanceMovies } from "./constants/constants";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost title="Netflix Originals" genre={originals}/>
      <RowPost title="Action" isSmall genre={action}/>
      <RowPost title="Romance" isSmall genre={RomanceMovies}/>
     </>
  );
}

export default App;
