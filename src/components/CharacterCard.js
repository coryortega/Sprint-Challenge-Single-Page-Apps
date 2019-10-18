import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CharacterCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><h2>{props.name}</h2></CardTitle>
        </CardBody>
        <div className = "imgContainer">
        <img className= "img" width="100%" src={props.image} alt="Card image cap" />
        </div>
      </Card>
    </div>
  );
};
export default CharacterCard;