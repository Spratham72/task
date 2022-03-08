import { useState } from "react";
import { Navbar } from "./navbar"

export const Check=()=>{
    const [input, setInput]=useState({name:"",email:"", phone:"", address:""});
    const [err,setError]=useState(false);
    const [errors,setErrors]=useState("");
    const saveData=(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
    }
    const validate=()=>{
      if(input.name.length<=3){
        setErrors("Enter Full Name");
        setError(true)
      }
      else if(
        !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input.email)
    ){
      setErrors("Enter valid email");
      setError(true)
    }
   
   else  if(!new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(input.phone)){
      setErrors("Invalid Phone Number");
      setError(true)
    }
    else if(input.address.length<=3){
      setErrors("Address is not valid");
      setError(true)
    }else{
      setError(false)
      alert(`${input.name}, order placed succesfully`)
    }
    }
    
    return <div>
  <Navbar/>
    {err?<div style={{"color":"red", "fontSize":"20px","marginTop":"5%"}}>{errors}</div>:null}

        <form style={{"marginTop":"5%"}}>
  <label>
    Name: <br/>
    <input type="text" name="name" onChange={saveData} />
  </label> <br/>
  <label>
    email: <br/>
    <input type="email" name="email" onChange={saveData} />
    
  </label> <br/>
  <label>
    Phone: <br/>
    <input type="text" name="phone" onChange={saveData} />
    
  </label> <br/>
  <label>
    Address: <br/>
    <input type="text" name="address" onChange={saveData}/>
    
  </label> <br/><br/>
  </form>
  <button onClick={validate}>Order</button>
    </div>
}