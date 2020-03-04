import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


import Header from "./components/Header/header";
import Cards from "./components/Cards/cards";
import Footer from "./components/Footer/footer";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W"
      )
      .then(response => {
        setPhotos(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
console.log(photos)
  return (
    <div className="App">
      <Header />
      <Cards
        data = {photos}
      />
      <Footer />
    </div>
  );
}

export default App;
