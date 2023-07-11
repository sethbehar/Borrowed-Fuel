import React from 'react';
import './styles/results.css'

function Results({ mpg, distance, gasPrice }) {
  let gasPriceWithoutDollar
  let totalCost
  if (gasPrice) {
    gasPriceWithoutDollar = parseFloat(gasPrice.substring(1))
  }

  distance === null || mpg === null || gasPrice === null
    ? totalCost = 0 
    : totalCost = ((distance / mpg) * gasPriceWithoutDollar).toFixed(2)

  return (
    <div className="results-container"> 
      <p>Miles Per Gallon: {mpg}</p>
      <p>Average Gas Price: {gasPrice}</p>
      <p>Distance: {distance === null ? 0 : distance} miles</p>
      <p>Total cost: ${totalCost}</p>
    </div>
  );
}

export default Results;
