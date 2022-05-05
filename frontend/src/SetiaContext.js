import { createContext, useState } from 'react';

const SetiaContext = createContext()

export const SetiaHelper = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <SetiaContext.Provider value={{cartState:[cart,setCart], productState:[product,setProduct]}}>
      {children}
    </SetiaContext.Provider>
  );
};

export default SetiaContext;