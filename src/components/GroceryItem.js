import "./components.css";
import { useState } from "react";
// TODO: create a component that displays a single bakery item
function GrocercyItem(props){
    const item = props.item
    const price = item.price
    // const type = item.type
    // const name = props.item.name
    return (
        <div className="GrocercyItem">
            <img src={item.image}></img>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>type: {item.types}</p>
            <button onClick={()=>{props.addToCart(item)}}>Add to cart</button>

        </div>
    );
}

export default GrocercyItem;