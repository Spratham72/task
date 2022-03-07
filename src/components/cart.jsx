import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import "../style/product.css";
import { Navigate } from "react-router-dom";
export const Cart = () => {
const [check,setCheck]=useState(false);
  const [data, setData] = useState([]);
  const [bool,setBoool] =useState(false);
   useEffect(()=>{
     const ar=JSON.parse(localStorage.getItem("cart"));
     if(ar){
         setBoool(true)
     }else{
         setBoool(false)
     }
    setData(ar);
    
   
 },[]);
const deletion=(id)=>{
    const ar=JSON.parse(localStorage.getItem("cart"));
    let newArr=ar.filter(el=>el.id!==id);
    console.log(newArr)
    localStorage.setItem("cart",JSON.stringify(newArr));
    setData(newArr);
    
}
const save=(id,data)=>{
    const ar=JSON.parse(localStorage.getItem("cart"));
    let newArr=ar.filter(el=>el.id!==id);
    console.log(newArr)
    localStorage.setItem("cart",JSON.stringify(newArr));
    setData(newArr);
    if(!localStorage.getItem("save")){
        localStorage.setItem("save",JSON.stringify([]));
    }
    let s=JSON.parse(localStorage.getItem("save"));
    s.push(data);
    localStorage.setItem("save",JSON.stringify(s));

}
if(check){
    return <Navigate to="/checkout"></Navigate>
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
            <button id="delete" onClick={()=>{
                deletion(el.id)
            }}>Delete</button>
            <button id="save" onClick={()=>{
                save(el.id,el)
            }}>save</button>
          </div>
        )):<div id="noresult">No Items</div>}
      </div>
    </div>
    <button id="cart" onClick={()=>{
        setCheck(true);
    }}>Checkout</button>
    </>
  );
};
