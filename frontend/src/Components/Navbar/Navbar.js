
import React from "react"
import Image from "next/image"
import originlogo from "../../../public/Images/originlogo.jpg";
import styled from "styled-components";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navcontainer=styled.div`
 background:#415CB7;
display:flex;

`
const Navtop=styled.div`
display:flex;
flex-direction:row;
padding:2em;
gap:2em;
justify-content:center;
align-items:center
`
const Navicon=styled.div`
display:flex;
border:2px solid  teal;
align-items:center;





`
const Navinput=styled.div`
border:none;
background-color:white;
outline:none;




`

const Navsearch=styled.div`

`

const Navbar = () =>{
  return(
    <Navcontainer>
    <div>
      <Image src={originlogo} width="100px" height="100px"/>
    </div>

    <Navtop>
 

  <p>Dresses</p>

  <p>Skirts</p>

  <p>Kids</p>

  <p>Bags</p>


<SupervisorAccountOutlinedIcon />
<ShoppingCartOutlinedIcon />
<Navicon>
<Navinput>
<input type="text" placeholder="Search products"/>
</Navinput>
<Navsearch>
<SearchOutlinedIcon />
</Navsearch>
  </Navicon>
 
</Navtop>

    </Navcontainer>
  )
}
export default Navbar