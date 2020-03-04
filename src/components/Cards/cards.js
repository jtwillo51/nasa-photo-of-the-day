import React from "react";
import { Player } from "video-react";



function Cards(props) {
  const { date, title, explanation, url } = props.data;

  return (
    <div className="card">
      <h2>
        <span className="date">{date}</span>
        {title}
      </h2>
      <p className="explanation">{explanation}</p>
      <a className="url">{url}</a>
      <Player href = {url}/>
        
    </div>
  );
}

export default Cards;
