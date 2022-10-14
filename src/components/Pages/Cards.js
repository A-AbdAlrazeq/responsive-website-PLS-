import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text=" The golden helmet of the Dome of the Rock shines on the caramel-coloured stones of the Old City."
              label="Jerusalem"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text=" The highlight of this beautiful northern city is the Baha’i Gardens, a series of pristine green terraces with hills rolling towards the sea"
              label="Haifa"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="magnificent view of honey-coloured stones, a cool town that used to be the splendour of the main port"
              label="Jaffa"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="is the lowest point on the earth and one of the peculiar natural wonders in the world"
              label="Dead Sea"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="The coast surrounding the Sea of ​​Galilee is full of sights, offering beautiful scenery and a long history"
              label="Sea of ​​Galilee"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
