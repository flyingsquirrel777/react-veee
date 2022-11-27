import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import groceryData from "./assets/grocery-data.json"
import GrocercyItem from './components/GroceryItem';
import NavBar from './components/NavBar';


function App() {
  const  [cartItems, setCartItems] = useState([]);
  const  [type, setType] = useState("All");

//  function type_setter(input_type){
//   setType(input_type)
//  }

 function selectFilterType(input_type){
  setType(input_type)
 }

 function matchesFilterType(item){
  if (type === "All"){
    return true
  }else if (type === item.types){
    return true
  }else{
    return false
  }


 }
 const filteredData = groceryData.filter(item=>{
  return matchesFilterType(item)
})


 


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
      <h1>Veee Groceries</h1> 
      <div className='Content'>
        {/* <Nav onSelect={selectFilterType}>
          <Nav.Item><Nav.Link eventKey="All"></Nav.Link></Nav.Item>
        </Nav> */}
        <NavBar selectFilterType = {selectFilterType}></NavBar>
        <div className='GroceryContainer'>
          {
            filteredData.map((item)=>(
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
