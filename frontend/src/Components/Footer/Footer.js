import React from "react";
import Image from "next/image";
import styled from "styled-components";
import originlogo from "../../../public/Images/originlogo.jpg";

const FooterContainer=styled.div`


`


const Footerli=styled.div`
`
const Footer=() =>{
    return(
<div>
  <FooterContainer>
      
  <div>
      <Image src={originlogo} width="100px" height="100px"/>
    </div>

    <Footerli>
        <>
        <ul>
            <li></li>
        </ul>
        </>
    </Footerli>

      </FooterContainer>  
    
</div>
    )
}

export default Footer;