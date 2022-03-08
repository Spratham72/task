import { useEffect, useRef, useState } from "react";
import { Navbar } from "./navbar";
import "../style/product.css";
export const Products = () => {
const ref=useRef(null);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [fetchData , setFetch]=useState(false);
  const [prevButton, setPrev] = useState(false);
  const [nextButton, setNext] = useState(false);
  const [input, setInput]=useState("");
  const [rate,setRate]=useState("4.6");
  const [pageNum, setPage] = useState(1);
  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/reds")
      .then((res) => res.json())
      .then((res) => setData(res));
      setPage(1);
  }, [fetchData]);
  useEffect(() => {
    setDisplay(data.slice((pageNum - 1) * 8, (pageNum - 1) * 8 + 8));
    pageNum === 1 ? setPrev(true) : setPrev(false);
    pageNum === Math.ceil(data.length / 8) ? setNext(true) : setNext(false);
  }, [pageNum, data,rate]);
  console.log(data);
  const previousPage = () => {
    setPage(pageNum - 1);
  };
  const nextPage = () => {
    setPage(pageNum + 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const lastPage = () => {
    setPage(Math.ceil(data.length / 8));
  };
  const filterData=()=>{
        setPage(1);
            fetch("https://api.sampleapis.com/wines/reds")
            .then((res) => res.json())
            .then((res) => setData(res.filter(el=>Number(el.rating.average)===Number(rate))));
  }
  const search=()=>{
    fetch("https://api.sampleapis.com/wines/reds")
    .then((res) => res.json())
    .then((res) => setData(res.filter(el=>el.winery.includes(input))));
    ref.current.value="";
    
  }
  const addCart=(data)=>{
    if(!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify([]));
    }
    let ar=JSON.parse(localStorage.getItem("cart"));
    ar=[...ar,data];
    localStorage.setItem("cart",JSON.stringify(ar));

  }
  return (
      <><Navbar/>
    <div id="box">
        <div id="filter"> 
           Rating: <select onChange={(e)=>{
               setRate(e.target.value);
               
           }}>
                <option value="4.6">4.6</option>
                <option value="4.7">4.7</option>
                <option value="4.8">4.8</option>
                <option value="4.9">4.9</option>
            </select>
            <button onClick={filterData}>Apply Filter</button>
            <button onClick={()=>setFetch(!fetchData)}>Clear Filter</button>
            <input ref={ref} type="text" placeholder="Search..." style={{"marginLeft": "150px", "height": "30px"}} id="inputSearch" onChange={(e)=>setInput(e.target.value)}/> <button onClick={search} >Search</button>
        </div>
      <div id="container">
        {display.length>0?display.map((el) => (
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

            <h4>Ratings: {el.rating.average}/5</h4>
            <button id="cart" onClick={()=>{
                addCart(el)
            }}>Add to cart</button>
          </div>
        )):<div id="noresult">No result found</div>}
      </div>
      <button id="pagenation" onClick={firstPage}>
        First Page
      </button>
      <button
        id="pagenation"
        onClick={previousPage}
        disabled={prevButton}
      >{`<<`}</button>
      <button id="pagenation">Page {pageNum}</button>
      <button
        id="pagenation"
        onClick={nextPage}
        disabled={nextButton}
      >{`>>`}</button>
      <button id="pagenation" onClick={lastPage}>
        Last Page
      </button>
    </div>
    </>
  );
};
