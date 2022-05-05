import React, { useContext, useEffect, useState } from "react";
import SetiaContext from "../../SetiaContext";
// import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
// import image from "../../../public/Images/remove.png";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Footer from "../Footer/Footer";
const Navcontainer = styled.div`
  display: flex;
  background-color:teal;
`;
const Navtop = styled.div`
  display: flex;
  flex-direction: row;
  // // padding: 2em;
  gap: 7em;
  // justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
 
`;
const Navicon = styled.div`
  display: flex;
  border: 1px solid white;
  align-items: center;
  padding: 0 1em;
  border-radius: 20px;
  background-color: white;

`;
const SearchContainer = styled.div`
  padding: 0 1em;
`;
const Searchinput = styled.input`
  border: none;
  // background-color: teal;
  outline: none;
`;

const Navsearch = styled.div``;

const Navbar = () => {
  // const [showCart, SetShowCart] = useState()

  const { cartState, productState } = useContext(SetiaContext);
  const [cart, setCart] = cartState;

  console.log(cart);
  return (
    <div>
    <Navcontainer>
            
    <div className="navlogo">
      <Link href={"/"}>
      <img src="/Images/remove.png" width="100px" height="100px"/>
      </Link>
    </div>

      {/* <div>
        <Image src={image} width='200px' height='400px' alt='fxrgfch'/>
      </div> */}
      <Navtop>
        <div className="navcategory">
        <Link href={"/categories/dresses"}>
          <p>Dresses</p>
        </Link>

        <Link href={"/categories/skirts"}>
          <p>Skirts</p>
        </Link>

        <Link href={"/categories/kids"}>
          <p>Kids</p>
        </Link>

        <Link href={"/categories/bag"}>
          <p>Bags</p>
        </Link>

        <Link href={"/categories/kimono"}>
          <p>Kimono</p>
        </Link>
        </div>
        {/* <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge> */}

    <div>
      <Link href="/DisplayPage">
      <button className="nav-btn" >All products</button>
      </Link>
      
</div>
<div>
<Link href="/Addproduct">
      <button className="nav-btn" >Add products</button>
      </Link>
</div>
    <div className="nav-search">


        <Navsearch>
          <Link href="/account/Register">
            <SupervisorAccountOutlinedIcon className="search-loginicon" />
          </Link>
        </Navsearch>
        <Link href={"/Cartpage"}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartOutlinedIcon
              color="black"
              className="search-shopicon"
            />
          </Badge>
        </Link>
        {/* <ShoppingCartOutlinedIcon /> */}
        <Navicon>
          <SearchContainer>
            <Searchinput type="text" placeholder="Search products" />
          </SearchContainer>
          <Navsearch>
            <SearchOutlinedIcon className="search-loginicon" />
          </Navsearch>
        </Navicon>
        </div>
      </Navtop>
     
    </Navcontainer>
    </div>
  );
};
export default Navbar;
