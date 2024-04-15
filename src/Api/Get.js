import React, { useEffect, useState } from 'react'

const Get = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
   fetch('https://fakestoreapi.com/products')
   .then((res) => {
    return res.json();
   })
   .then((val) => {
    console.log(val);
    setData(val);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  })

    },[]);
  return (
    <div>
      {data.map((val)=> {
        return <><h1>{val.title}</h1>
         <h1>{val.price}</h1>
         <img src={val.image}/>
         <p>{val.description}</p>
         <h2>{val.category}</h2>
         </>
        
      })}
    </div>
  )
}

export default Get
