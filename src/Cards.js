import React from 'react'
import CardDeck from "react-bootstrap/CardDeck";
import { CartData } from "./CartData";
import { Cart } from "./Cart.js";


export function Cards() {
    return (
       
    <CardDeck className="cardDeck">
      {CartData.map((ele, index) => 
      {
        const { title, price, perksAvailable, perksUnavailable } = ele;
        return (
          // Each Card individually mapped using the data from the CartData.js
          <Cart
            key={index}
            title={title}
            price={price}
            perksAvailable={perksAvailable}
            perksUnavailable={perksUnavailable}
          />
        );
      })}
      {/* console.log(title); */}
    </CardDeck>
   
    );
}

//export default Cards;
