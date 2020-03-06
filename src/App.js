import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header/header";
import Cards from "./components/Cards/cards";

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: 5% 10%;
  height: 110vh;
`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [photos2, setPhotos2] = useState([]);
  const [photos3, setPhotos3] = useState([]);
  const [photos4, setPhotos4] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W&date=2020-03-05"
        ),
        axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W&date=2020-03-02"
        ),
        axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W&date=2020-02-26"
        ),
        axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W&date=2020-02-24"
        )
      ])

      .then(axios.spread((firstresponse, secondresponse, thirdresponse, fourthresponse) =>{
        setPhotos(firstresponse.data)
        setPhotos2(secondresponse.data)
        setPhotos3(thirdresponse.data)
        setPhotos4(fourthresponse.data)
      }))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <StyledContent>
        <Cards data={photos} />
        <Cards data={photos2} />
        
      </StyledContent>
      <StyledContent>
        <Cards data = {photos3}/>
        <Cards data = {photos4}/>
      </StyledContent>
    </div>
  );
}

export default App;
