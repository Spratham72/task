import {useState } from "react"
import { Navigate } from "react-router-dom"

export const Navbar=()=>{
    const [cart,setCart]=useState(false);
    const [product,setProduct]=useState(false);
    const [save,setSave]=useState(false);
    if(cart){
        return <Navigate to="/cart">dsd</Navigate>
    }
    if(product){
        return <Navigate to="/">dsd</Navigate>
    }
    if(save){
        return <Navigate to="/save">dsd</Navigate>
    }
    return <div style={{"display":"flex", "backgroundColor":"rgba(201, 223, 168, 0.651)", "justifyContent":"space-around" }}>
        <h3 style={{"cursor":"pointer"}} onClick={()=>{
             setCart(false);
             setSave(false);
            setProduct(true);
           
        }}>Products</h3>
        <h3 style={{"cursor":"pointer"}} onClick={()=>{
            setProduct(false);
            setSave(false)
            setCart(true);
        }}>Cart</h3>
        <h3 style={{"cursor":"pointer"}} onClick={()=>{
            setProduct(false);
            setCart(false);
            setSave(true)
        }}>Save Items</h3>
    </div>
}