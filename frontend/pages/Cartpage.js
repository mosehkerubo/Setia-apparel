import React, { useState,useEffect ,useContext} from "react"
import Footer from "../src/Components/Footer/Footer";
import Navbar from "../src/Components/Navbar/Navbar";
import SetiaContext from "../src/SetiaContext";


const CartPage =() =>{
const {cartState, productState} = useContext(SetiaContext);
const [cart, setCart] = cartState;


return(
  <div>
    <Navbar/>

    {
cart.map(item=>{
  return(
    <div className="cart">
    <div className="cart-page">
    <div>
          <h1>{item.productname}</h1>
    
    <img src={item.image} width={"250px"}/>

    <p>{item.productDescription}</p>
    </div>
    </div>
    </div>
  )
})



    }
   <Footer />
  </div>
)

}

export default CartPage;










