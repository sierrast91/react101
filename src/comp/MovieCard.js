import React from "react";
import "./MovieCard.css";
export default function MovieCard(props) {
  const handleClick = () => {
    console.log(props.tt);
  };
  return (
    <>
      <div id="MC" onClick={handleClick}>
        <img src={`https://image.tmdb.org/t/p/w500${props.url}`}></img>
        <div>
          <p>{props.tt}</p>
          <div>{props.time}</div>
        </div>
      </div>
    </>
  );
}
