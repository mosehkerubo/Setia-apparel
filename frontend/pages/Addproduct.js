import React, { useState } from "react";
import styled from "@emotion/styled";
// import
const Productcontainer = styled.div``;
const ProductInput = styled.div``;

const Addproduct = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [productinput, setproductinput] = useState({
    productname: "",
    productDescription: "",
    price: "",
    image: "",
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

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productinput),
    };

    return fetch(producturl, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 11000) {
          console.log("added product");
        } else {
          console.log(data);
          return data;
        }
      });
  }

  return (
    <Productcontainer>
      <ProductInput>
        <div className="form-floating mb-3">
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
          <label for="floatingInput">productname</label>
        </div>

        {/* productDescription */}
        <div className="form-floating">
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

          <label for="floatingInput">productDescription</label>
        </div>

        {/* size */}

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="price"
            onChange={(e) =>
              setproductinput({ ...productinput, price: e.target.value })
            }
          />
          <label for="floatingInput">price </label>
        </div>

        <div className="form-floating">
          <input
            type="file"
            name="file"
            className="form-control"
            id="floatingInput"
            placeholder="image"
            onChange={(e) => uploadImage(e)}
          />
          <label for="floatingInput">image</label>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleProduct}
          disabled={!productinput.image}
        >
          Add product
        </button>
      </ProductInput>
    </Productcontainer>
  );
};
export default Addproduct;


