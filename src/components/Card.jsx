import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${props.buttonText}`);
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="card-content">
        <button onClick={handleClick}>{props.buttonText}</button>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
