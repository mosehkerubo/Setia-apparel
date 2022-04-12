import React from 'react'
// import Home from "../pages/Home";
// import Navbar 

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
  
  <Component {...pageProps} />
 

  </div>
  )
}

export default MyApp
