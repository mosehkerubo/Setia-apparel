
import React,{useState,useEffect} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Cart = ({ cart,setCart, handleClick }) =>{
    const [price,Setprice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !==id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount *item.price));
        Setprice(ans);
    };
    useEffect(() => {
        handlePrice();
    });
    return(
        <article>
            {cart.map((item) => (
                <div className="cart-box" key={item.id}>
                    <div className="cart-img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
<div>
    <button onClick={()=>handleChange(item, 1)}>+</button>
    <button>{item.amount}</button>
    <button onClick={() => handleChange(item, -1)}>-</button>
    </div>
<div>
    <span>{item.price}</span>
    <button onClick={()=> handleRemove(item.id)}>Remove</button>
    </div>
                </div>
            ))}


            <div className="total">
<span>Total price of your Cart</span>
<span>Rs - {price}</span>
            </div>
        </article>
    );
};

export default Cart
















































// const SingleProduct =()=>{

// const


//     // const [Number,setNumber]=useState(0);
//     // const increase=()=>{ 
//     //  if(Number<5){
//     //     setNumber(prevNumber=>prevNumber  +1);}


//     // };


//     // const decrease=()=>{
//     //     if(Number>1){
//     //     setNumber(prevNumber=>prevNumber  -1);}
//     // };
//     return(


      
    
//         <div>

// {/* <div>
//     <ShoppingCartOutlinedIcon />
// </div>

// <div>
//     <RemoveOutlinedIcon onClick={decrease} />
// </div>

// <div>
//     <p><FavoriteBorderOutlinedIcon />Add to Wishlist</p>
    
// </div>
// <div>
// <p>{Number}</p>
// </div>
// <div><AddOutlinedIcon  onClick={increase}/>
// </div> */}

//         </div>
//     )
// }

// export default SingleProduct;













































// // import { useContext } from "react";
// // import { Button } from "semantic-ui-react";
// // import { CartContext } from "../context/cart";

// // const Product = () => {
// //   const { dispatch } = useContext(CartContext);
// //   return (
// //     <>
// //       {/* Product components */}
// //       <Button
// //         color="green"
// //         onClick={() => dispatch({ type: "ADD_ITEM", payload: { id } })}
// //       >
// //         Add to Cart
// //       </Button>
// //     </>
// //   );
// // };

// // export default Product;












// // import React,{ useState } from "react";


// // import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
// // import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// // import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// // const SingleProduct = () => {
// //   const [color, setColor] = useState("Maroon");

// //   function handleColorChange(color) {
// //     setColor(color);
// //   }

// //   const [Number, setNumber] = useState(0);
// //   const increase = () => {
// //     if (Number < 5) {
// //       setNumber((prevNumber) => prevNumber + 1);
// //     }
// //   };

// //   const decrease = () => {
// //     if (Number > 1) {
// //       setNumber((prevNumber) => prevNumber - 1);
// //     }
// //   };

// //   return (
// //     <div>
      
// //       <div className="kimono-des">
// //         <div className="item-content">
          
          
// //         </div>
// //       </div>

     
// //     </div>
// //   );
// // };

// // export default SingleProduct;


// // //cartpage
// // import React, { useState } from "react";
// // import Announcement from "../components/Announcements/Announcements";
// // import Nav from "../components/Nav/Nav";

// // import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// // import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// // import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// // import Footer from "../components/Footer/Footer";


// // const CartPage=()=>{
// // const [Number, setNumber]=useState(0);
// // const increase=()=>{
// //     if(Number<5){
// //         setNumber(preNumber=>preNumber +1);
// //     }
// // };
// // const decrease=()=>{
// //     if(Number >1){
// //         setNumber(prevNumber=>prevNumber -1);
// //     }
// // };

// //     return(
// //         <div>
// // <Nav />
// // <Announcement />
// // <div className="cart-wrapper">
// // <div className="cart-wrapper2">
// // <div className="imgs-content">
// //     <div className="cart1-content">
// // <div className="tshirt-pic">
// //   <img  src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
// // </div>
// // <div >
// //     <div className="remove-cart">
// // <div>
// //     <p>Mens Jake Guitar Vintage Crusher</p>
  
// // </div>
// // <div>
// //     <p className="cash-class"> X1  Ksh.3,000 </p>
  
// //     </div>
// // </div>
// // <div>

// // <div className="remove-add-cart">
// // <div className="little-circle">


// //     </div>

// //     <div>
// //     <RemoveOutlinedIcon onClick={decrease} />
// //     </div>
// //     <div>
// //     <p>{Number}</p>
// //     </div>
// //     <div>
// //     <AddOutlinedIcon  onClick={increase}/>
// // </div>

// // <div className="delete-icon red-text">
// //         <div>
// //         <DeleteOutlineOutlinedIcon />
// //         </div>
// //         <div>
// //     <p>Remove item</p>
// //     </div>
// //     </div>


    
// //     </div>
// // </div>
// // </div>
// // </div>


// // <div className="cart2-content">
// //     <div className="tshirt-pic">
// //     <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
// // </div>
// // <div>
// //     <div className="remove-cart">
// // <div>
// //     <p>Rocket Vintage Chill Cap</p>
  
// // </div>
// // <div>
// //     <p className="cash-class"> X1  Ksh.4,000 </p>
  
// //     </div>
// // </div>
// // <div>

// // <div className="remove-add-cart">
// // <div className="little-circle">


// //     </div>



// //     <div>
// //     <RemoveOutlinedIcon  onClick={decrease}/>
// //     </div>
// //     <div className="account">
// //     <p>{Number}</p>
// //     </div>
// //     <div>
// //     <AddOutlinedIcon onClick={increase}/>
// // </div>

// // <div className="delete-icon red-text">
// //         <div>
// //         <DeleteOutlineOutlinedIcon />
// //         </div>
// //         <div>
// //     <p>Remove item</p>
// //     </div>
// //     </div>


    
// //     </div>
// // </div>
// // </div>


// // </div>
// // <div><button className="shop-btn btn-green">Continue Shopping</button></div>
// // </div>

// // <div className="your-order-container">
// // <div className="order-totals">
// //     <h3>Your Order</h3>
// //     <div className="sub-manu">
// //     <p>Subtotals</p>
// //     <div>
// // <p className="cash-class">Ksh. 4,000</p>
// // </div>
// //     </div>
// //     <div className="sub-manu">
// //     <p>Discounts</p>
// // <p>-</p>
// //     </div>
// //     <div className="sub-manu">
           
// //     <p>Shipping</p>
// //     <p>-</p>
// //     </div>
// //     <div className="sub-manu totals">
// //     <p>Totals</p>
// // <p className="cash-class">Ksh. 4,000</p>
// //     </div>


// // <button className="checkout-btn btn-green">CHECKOUT</button>
// // </div>
// // </div>
// // </div>
// // </div>
// // <Footer/>
// //         </div>
// //     )
// // }




// // export default CartPage
