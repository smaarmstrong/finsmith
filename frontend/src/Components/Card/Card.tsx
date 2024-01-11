import React from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
        <img
          src="https://source.unsplash.com/Y9U4XZYbSQ4"
          alt="Gold Bars"
        />
    <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
    <p className="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, consequatur.
    </p>
    </div>
    </div>
  )
}

export default Card