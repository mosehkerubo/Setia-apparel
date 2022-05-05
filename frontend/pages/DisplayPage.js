import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import SetiaContext from "../src/SetiaContext";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";

export default function DisplayPage() {
  const { cartState, productState } = useContext(SetiaContext);
  const [cart, setCart] = cartState;
  const [product, setProduct] = productState;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    try {
      const url = "https://floating-badlands-09507.herokuapp.com/api/product/";
      axios.get(url).then((res) => {
        setProduct([res.data]);
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(product);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      return setCart(() => JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0 && cart !== null) {
      return localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const [add, setAdd] = useState([]);

  const [acceptCart, setAcceptCart] = useState([]);

  function handleClick(e, cartItem) {
    // console.log(e.target.innerText)
    if (e.target.innerText === "Add to cart") {
      setCart([...cart, cartItem]);
      e.target.innerText = "Added to cart";
    }
  }

  return (
    <div className="productContainer">
      <Navbar />
      <div>
        <h1 style={{ textAlign: "center", margin: "1em 0" }}>Products</h1>
        <div className="productContent">
          {product.map((item1) => {
            return item1.map((item) => {
              return (
                <div key={item._id} >
                  <div className="imgContainer">
                    {/* <div className="innerimgcontainer"> */}
                    <Link href={`products/${item._id}`}>
                      <img src={item.image} width={400} height={500} />
                    </Link>
                    <div className="nameclass-btn">
                      <h2>{item.productname}</h2>
                      <h3>Ksh. {item.price}</h3>
                      {/* </div> */}
                      <div>
                        {/* <Link href={"/Cartpage"}> */}
                        <button
                          className="toCart-btn"
                          onClick={(e) => handleClick(e, item)}
                          width="60%"
                        >
                          {cart.some((cartItem) => cartItem._id === item._id)
                            ? "Added to cart"
                            : "Add to cart"}
                        </button>

                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
