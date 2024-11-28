import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Electronic() {
    const [state,setstate] = useState([]);
    const [arr,setarr] = useState([]);
    const [word,setword] = useState('');

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res)=>{ 
            return res.json()
            .then((data)=>{
                setstate(data)
                setarr(data)
            })
        })
    },[])


    function lowtohigh() {
      const sortedArray = [...state].sort((a, b) => a.price - b.price); 
      setarr(sortedArray);
    }
  
    function highToLow() {
      const sortedArray = [...state].sort((a, b) => b.price - a.price); 
      setarr(sortedArray);
    }

    function sortIt(e){
    let keyword = e.target.value.toLowerCase();
    setword(keyword);

    let SortArr =   state.filter((el)=>{
      return el.title.toLowerCase().includes(word);
      })



      setarr(SortArr);
        }


  return (
    <div>
      <input type="text" placeholder='search something here..' value={word} onChange={sortIt}/>
      <br /><button onClick={()=>lowtohigh()}>low to high</button> 
      <br /><button onClick={()=>highToLow()}>high to low</button> 
      <br /><br /><br />
       {
        arr.map((el,i)=>{
            return <>
            <Link to ={`/productdetail/${el.id}`}>{el.title}</Link>  price: {el.price}<br /> <br />
</>
        })
       }
    </div>
  )
}
