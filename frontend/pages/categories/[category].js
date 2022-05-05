import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import SetiaContext from "../../src/SetiaContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../src/Components/Navbar/Navbar";
import Footer from "../../src/Components/Footer/Footer";

// const Items=styled.div`
// display:flex;
// flex-direction:row;
// margin:1em;
// `

const Category = () => {
  const { cartState, productState } = useContext(SetiaContext);
  const [product, setProduct] = (productState);
  const router = useRouter();


 
  useEffect(() => {
    try {
      const url = "https://floating-badlands-09507.herokuapp.com/api/product/";
      axios.get(url).then((res) => {
        setProduct([res.data]);
      })
      .catch(err=>{
        console.log(err)
      });

     
    } catch (err) {
      console.log(err);
    }
  }, []);



  
  const { category } = router.query;

 
  return (
    <div>
<Navbar />
<div className="category">
      {product.map((items)=>{
          return items.map((item) => {

          if (item.category.toLowerCase() === category) {
            console.log(item.category)
            return (
              
              <div key={item._id}>
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
                      width="60%"
                    >
                      Add to cart
                    </button>

                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            );
            
          }
  
          console.log(item);
        })
      })
      
      
      
      
      
      }
    </div>



<Footer />

    </div>
  );
   
};
export default Category;



