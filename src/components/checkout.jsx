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
    <input type="email" name="name" required={true}/>
    
  </label> <br/>
  <label>
    Phone: <br/>
    <input type="text" name="name" required={true}/>
    
  </label> <br/>
  <label>
    Address: <br/>
    <input type="text" name="name" required={true}/>
    
  </label> <br/><br/>
  </form>
  <button onClick={()=>{
     alert("ORDER PLACED!   ")
  }}>Order</button>
    </div>
}