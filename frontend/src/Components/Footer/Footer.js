import React from "react";
import Image from "next/image";
import styled from "styled-components";
import originlogo from "../../../public/Images/originlogo.jpg";
import Link from "next/link";


const FooterContainer=styled.div`
background-color:teal;

`
const FooterLinksa=styled.div`

list-style:none;
cursor:pointer;


`

const FooterLinksb=styled.div`
cursor:pointer;

`

const Footerli=styled.div`
display:flex;
align-items:center;
justify-content:space-around;
list-style-type:none;
// background-color:teal;
`



const Footer=() =>{
    return(
<div>
  <FooterContainer>
      
  

    <Footerli>
    {/* <div> */}
       <div className="navlogo">
      <Link href={"/"}>
      <img src="/Images/remove.png" width="150px" height="150px"/>
      </Link>
    </div>

  {/* <img src="Images/remove.png" width="100px" height="100px"/>    */}
   {/* </div> */}

        <FooterLinksa>
        <div>
    
    
            <h5>Support</h5>
        
        <p>Contact us</p>
        <Link href="account/Register">
        <p>Login</p>
        </Link>
        
        </div>
        
        
            
</FooterLinksa>
<FooterLinksb>

        
            <h5>About us</h5>
        
        <p>Get to know us</p>
        <p>Career</p>
        
        
        </FooterLinksb>
     
    </Footerli>

      </FooterContainer>  
    
</div>
    )
}

export default Footer;