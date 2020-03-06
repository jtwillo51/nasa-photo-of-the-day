import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import styled from "styled-components";


const CardSize = styled.div`
  
  height: 35vh;
  width: 45%;
`;

function Cards(props) {
  const { date, title, explanation, url } = props.data;

  return (
    <CardSize>
      <Card>
          <CardBody>
            <CardTitle>{title}</CardTitle> 
            <CardSubtitle>{date}</CardSubtitle>
        <CardImg top-width = "80%" src = {url} alt = "nasa photo of the day"/>
            <CardText>{explanation}</CardText>      
          </CardBody>
      </Card>
    </CardSize>
  );
}

export default Cards;
