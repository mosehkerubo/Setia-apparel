import React from 'react'
import { SetiaHelper } from '../src/SetiaContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SetiaHelper>
  
  <Component {...pageProps} />
 

  </SetiaHelper>


  )
}

export default MyApp
