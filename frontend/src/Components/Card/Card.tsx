import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
        <img
          src="https://source.unsplash.com/Y9U4XZYbSQ4"
          alt="Gold Bars"
        />
    <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
    <p className="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, consequatur.
    </p>
    </div>
    </div>
  )
}

export default Card