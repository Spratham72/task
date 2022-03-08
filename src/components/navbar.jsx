
import { Link } from "react-router-dom";

export const Navbar=()=>{
    
    return <div style={{"display":"flex", "backgroundColor":"rgba(201, 223, 168, 0.651)", "justifyContent":"space-around" }}>
       <Link style={{"color":"black", "textDecoration":"none"}} to="/">  <h3 style={{"cursor":"pointer"}}>Products</h3></Link>
        <Link style={{"color":"black", "textDecoration":"none"}} to="/cart"><h3 style={{"cursor":"pointer"}}>Cart</h3></Link>
        <Link style={{"color":"black", "textDecoration":"none"}} to= "/save"><h3 style={{"cursor":"pointer"}}>Save Items</h3></Link>
    </div>
}