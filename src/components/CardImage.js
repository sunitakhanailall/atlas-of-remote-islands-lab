import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <img src= {props.image} alt="pic"/>
    
  );
}

export default CardImage;