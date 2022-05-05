import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Navbar from "../src/Components/Navbar/Navbar";
const Productcontainer = styled.div``;
const ProductInput = styled.div`
margin:0 auto;
border: 1px solid lightgray;
width:55%;
padding:1em;
margin-top:50px;
flex-direction:column;
justify-content:center;
align-items:center;`

const Addproduct = () => {
  // const [details,setDetails]=useState([])
  // export default function Addproduct (){
  const [imgUrl, setImgUrl] = useState("");
  // const [disabled, setDisabled] = useState(false);
  const [category, setCategory] = useState();



const [message,setMessage]=useState("")



  const [productinput, setproductinput] = useState({
    productname: "",
    price: "",
    image: "",
    category: "",
  });

  const uploadImage = async (e) => {
    const fileInput = e.target;
    const files = fileInput.files;
    const data = new FormData();

    for (let file of files) {
      data.append("file", file);
      data.append("upload_preset", "setia_uploads");
    }

    try {
      await fetch("https://api.cloudinary.com/v1_1/setia/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // setImgUrl(data.secure_url);

          return setproductinput({ ...productinput, image: data.secure_url });
        });
    } catch (err) {
      console.log(err);
    }
  };

  function handleProduct(e) {
    e.preventDefault();

    const producturl =
      "https://floating-badlands-09507.herokuapp.com/api/product/add";

    console.log(productinput);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productinput),
    };

    return fetch(producturl, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 79) {
          setMessage(`${productinput.productname} has been added`)

        } 
        console.log(data)
      });
  }





 
  return (
    <div>
    <Navbar />
<h2 style={{textAlign:"center"}}> Add a new Product</h2>
{/* <div className="product-sms"> */}
<p className="product-sms">{message}</p>
{/* </div> */}
    <Productcontainer>
      <ProductInput>
        <form className="addproduct-form">
        {/* <div className="form-floating mb-3"> */}
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="productname"
            onChange={(e) =>
              setproductinput({
                ...productinput,
                productname: e.target.value,
              })
            }
          />
          {/* <label htmlFor="floatingInput">productname</label> */}
        {/* </div> */}

        {/* productDescription */}
        {/* <div className="form-floating"> */}
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="productDescription"
            onChange={(e) =>
              setproductinput({
                ...productinput,
                productDescription: e.target.value,
              })
            }
          />

          {/* <label htmlFor="floatingInput">productDescription</label> */}
        {/* </div> */}

        {/* size */}

        {/* <div className="form-floating mb-3"> */}
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="price"
            onChange={(e) =>
              setproductinput({ ...productinput, price: e.target.value })
            }
          />
          {/* <label htmlFor="floatingInput">price </label> */}
        {/* </div> */}

        {/* <div className="form-floating"> */}
          <input
            type="file"
            name="file"
            className="form-control"
            id="floatingInput"
            placeholder="image"
            onChange={(e) => uploadImage(e)}
          />
          {/* <label htmlFor="floatingInput">image</label> */}
        {/* </div> */}

        <div>
        <label for="lang">Choose category</label>
          <select
            name="category"
            id="category"
            onChange={(e) =>
              setproductinput({ ...productinput, category: e.target.value })
            }
            value={productinput.category}
          >
            <option value="Kimono">kimono</option>
            <option value="Skirts">Skirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Kids">Kids</option>
            <option value="Bag">Bag</option>
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleProduct}
          disabled={!productinput.image}
        >
          Add product
        </button>
        </form>
      </ProductInput>
    </Productcontainer>
    </div>
  );
};
export default Addproduct;
