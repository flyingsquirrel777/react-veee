import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import groceryData from "./assets/grocery-data.json"
import GrocercyItem from './components/GroceryItem';
function App() {
  const  [cartItems, setCartItems] = useState([])
  // const  [price, setPrice] = useState(0)

  function addToCart(item){
    setCartItems([...cartItems, item])
  }

  function CalculateTotal(){
    let total = 0;
    for(let i =0; i < cartItems.length; i++){
      total += cartItems[i].price
    }
    return total
    
  }

  
  return (
    <div className="App">
      <p>hello world</p>
      <h1>Veee Groceries</h1> 
      <div className='Content'>
        <div className='GroceryContainer'>
          {
            groceryData.map((item)=>(
              <GrocercyItem item = {item} addToCart ={addToCart}></GrocercyItem>
            ))
          }

        </div>
        <div className="Cart">
          <h2>Cart</h2>
          {cartItems.map((item,index)=>(
            <p> {item.name}</p>
          ))}
          
          <h3>Total Price: {CalculateTotal()}</h3>
        </div>
      </div>
      

    </div>
  );
 
}

export default App;
