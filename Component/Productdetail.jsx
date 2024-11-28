import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function Productdetail() {
    const [state,setState] = useState({});
    const {id} = useParams();


        useEffect(()=>{
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=>{ 
                return res.json()
                .then((data)=>{
                    console.log(data);
                    setState(data)
                })
            })
        })
  return (
    <div>
    <h1>ProductDetails</h1>
    <h2>{state.title}</h2>
    <img src={state.image} alt="" />
    <h3>price:{state.price}$</h3>
    </div>
  )
}
