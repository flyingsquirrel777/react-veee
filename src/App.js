import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import groceryData from "./assets/grocery-data.json"
import typeData from "./assets/type-data.json"
import GrocercyItem from './components/GroceryItem';
function App() {
  const  [cartItems, setCartItems] = useState([])
  const  [typeDatas, setTypeDatas] = useState(typeData)
  const  [groceryDatas, setGroceryDatas] = useState(groceryData.map(item=>{
	  item.num=0;
	  item.isShow=true
	  return item
  }))
  // const  [price, setPrice] = useState(0)

  function addToCart(item){
	  
	  let list=groceryDatas.map(gitem=>{
		  return {
			  ...gitem,
			  num:gitem.name === item.name?1:gitem.num
		  }
	  })
	  console.log('groceryDatas',list)
	setGroceryDatas([...list])
    setCartItems([...cartItems, {
		...item,
		num:1
	}])
  }
function subNum(item){
	let list=groceryDatas.map(gitem=>{
			  return {
				  ...gitem,
				  num:gitem.name===item.name?(item.num-1):gitem.num
			  }
	})
	  console.log('groceryDatas',list)
	setGroceryDatas([...list])
	let cartItemsList=[];
	cartItems.forEach(sitem=>{
		if(sitem.name===item.name){
			if(sitem.num>1){
			cartItemsList.push({
				...item,
				num:sitem.num-1
			})
			}
		}else{
			
			cartItemsList.push(sitem)
		}
	})
	setCartItems([...cartItemsList])
}
function addNum(item){
	let list=groceryDatas.map(gitem=>{
			  return {
				  ...gitem,
				  num:gitem.name===item.name?(item.num+1):gitem.num
			  }
	})
	setGroceryDatas([...list]);
	let cartItemsList=[];
	cartItems.forEach(sitem=>{
		if(sitem.name===item.name){
			cartItemsList.push({
				...item,
				num:sitem.num+1
			})
		}else{
			cartItemsList.push(sitem)
		}
	})
	setCartItems([...cartItemsList])
}
function showlist(){
	return groceryDatas.filter(item=>item.isShow)
}
  function CalculateTotal(){
    let total = 0;
    for(let i =0; i < cartItems.length; i++){
      total += cartItems[i].price*cartItems[i].num
    }
    return total.toFixed(2)
    
  }
  // sort by ...
  function compare(property){
    return function(obj1,obj2){
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 - value2;     // sort
    }
   }
  function handleChange(event,name,item){
      let temp = [],typeArr=[];
      item.checked = event.target.checked;
      //filter target items
      typeDatas.map(item=>{
        item.category.map(citem=>{
          if(citem.checked){
            typeArr.push(citem.type)
          }
        })
      })
	temp = groceryDatas.map(item=>{
		item.isShow=true;
		return item
	})
      console.log('%c [ typeArr ]-46', 'font-size:13px; background:pink; color:#bf2c9f;', typeArr)
      if(typeArr.includes('price')){
         temp.sort(compare('price')) ; 
      }else{
		  let list=[];
		  groceryData.forEach(item=>{
			  let info=groceryDatas.find(sitem=>sitem.name===item.name);
			  list.push(info)
		  })
		  temp = [...list]
	  }
	  if(typeArr.includes('meat')||typeArr.includes('vegetables')||typeArr.includes('fruits')){
		temp=temp.map(gitem=>{
			return {
				...gitem,
				isShow:typeArr.includes(gitem.Types)
			}
		})
		 console.log('temp2',temp)
	 }
	 
	 if(typeArr.includes('newArrival')||typeArr.includes('onSale')){
		temp=temp.map(gitem=>{
			return {
				...gitem,
				isShow:gitem.isShow?typeArr.includes(gitem.special):false
			}
		});
	 }
	 
	 console.log('temp3',temp)
      setGroceryDatas([...temp])
  }


  
  return (
    <div className="App">
      <h1>Veee Groceries</h1> 
      <div className='Content'>
        <div className='siderBar'>
          {
            typeDatas.map((item)=>(
              <div key={item.name}>
                <p className="Catagories">{item.name}</p>
                  {
                    item.category.map((sitem)=>(
                      <div key={item.type}>
                        <input type='checkbox' id={sitem.type}  onChange={(event)=>handleChange(event,item.name,sitem)}></input>
                        <label htmlFor={sitem.type}>{sitem.desc}</label>
                      </div>
                    ))
                  }
              </div>
            ))
          }
        </div>
        <div className='GroceryContainer'>
          {
            showlist().map((item)=>(
              <GrocercyItem item = {item} addToCart ={addToCart} subNum={subNum} addNum={addNum}></GrocercyItem>
            ))
          }

        </div>
        <div className="Cart">
          <h2>Cart</h2>
          {cartItems.map((item,index)=>(
            <div className='cartList'>
            <div className="info">
                    <div><img src={item.image}></img></div>
                    <div>
                      <p> {item.name}</p>
                      <p>$ {item.price}</p>
                      <div>
                        <button onClick={() =>subNum(item)}>-</button>
                        <input type="text" className='num_box' value={item.num} />
                        <button onClick={() => addNum(item)}>+</button>
                      </div>
                    </div>
              </div>
            </div>
          ))}
          
          <h4>Total Price: $ {CalculateTotal()}</h4>
        </div>
      </div>
      

    </div>
  );
 
}

export default App;
