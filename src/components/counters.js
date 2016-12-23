import React, { Component } from 'react'

export default ({increaseBy, decreaseBy, num}) => (
  <div>
    <button onClick={()=>increaseBy(num)}>+</button>
    <button onClick={()=>decreaseBy(num)}>-</button>
  </div>
)
