import React from 'react'
import './Book.css';

const Book = (prop) => {
  return (
    <div id='book'> 
        <img src='https://tse4.mm.bing.net/th/id/OIP.aNm1aoymx1IjRc3_3nuGowHaL3?pid=Api&P=0&h=180' alt='' height={100} width={100} ></img>
        <h1>Title: {prop.name}</h1>
        <h1>Price: {prop.price}</h1>
    </div>
  )
}

export default Book