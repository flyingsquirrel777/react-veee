import "./components.css";
import { useState } from "react";
// TODO: create a component that displays a single bakery item
function GrocercyItem(props){
    const item = props.item
    
    // const name = props.item.name
    return (

        <div className="GrocercyItem">
            <img src={item.image}></img>
            <p className="itemName">{item.name}</p>
            <p>{item.description}</p>
            <p> type: {item.Types}   ${item.price} </p>
            <p className="promo">{item.special}</p>
			{item.num>=1?
			(
			<>
			<button onClick={() =>props.subNum(item)}>-</button>
            <input type="text" className='num_box' value={item.num} />
            <button onClick={() => props.addNum(item)}>+</button>
			</>):(<button className="addtocart" onClick={()=>{props.addToCart(item)}}>Add to cart</button>)}
          
		
        </div>
    );
}

export default GrocercyItem;