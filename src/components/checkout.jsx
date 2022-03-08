import { Navbar } from "./navbar"

export const Check=()=>{
    return <div>
        <Navbar/>
        <form style={{"marginTop":"5%"}}>
  <label>
    Name: <br/>
    <input type="text" name="name" />
    
  </label> <br/>
  <label>
    email: <br/>
    <input type="email" name="email" />
    
  </label> <br/>
  <label>
    Phone: <br/>
    <input type="text" name="phone" />
    
  </label> <br/>
  <label>
    Address: <br/>
    <input type="text" name="address" />
    
  </label> <br/><br/>
  </form>
  <button onClick={()=>{
     alert("ORDER PLACED!   ")
  }}>Order</button>
    </div>
}