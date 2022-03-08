import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import "../style/product.css";
export const Save = () => {
  const [data, setData] = useState([]);
  const [bool,setBoool] =useState(false);
   useEffect(()=>{
     const ar=JSON.parse(localStorage.getItem("save"));
     if(ar){
         setBoool(true)
     }else{
         setBoool(false)
     }
    setData(ar);
    
   
 },[]);

 const addCart=(data)=>{
     
    if(!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify([]));
    }
    let ar=JSON.parse(localStorage.getItem("cart"));
    ar=[...ar,data];
    localStorage.setItem("cart",JSON.stringify(ar));

  }
  return (
      <>
    <Navbar/>
    <div id="box">
      
      <div id="container">
        {bool&&data.length!==0?data.map((el) => (
          <div key={el.id}>
            <div id="img">
              <img src={el.image} alt={el.winery} />
            </div>
            <div id="winery">
              <h3>{el.winery}</h3>
            </div>
            <div id="wine">
              <p>{el.wine}</p>
            </div>

            <h4>{el.rating.average}</h4>
           
            <button id="save" onClick={()=>{
               addCart(el)
            }}>Add to cart</button>
          </div>
        )):<div id="noresult">No Items</div>}
      </div>
    </div>
    </>
  );
};
