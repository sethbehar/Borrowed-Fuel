import React from 'react';

function Results({ mpg, distance, gasPrice }) {
  let gasPriceWithoutDollar
  let totalCost
  if (gasPrice) {
    gasPriceWithoutDollar = parseFloat(gasPrice.substring(1))
  }

  if(distance > 10000000000000) {
    distance = 10000000000000
  }
  distance === null || mpg === null || gasPrice === null
    ? totalCost = 0 
    : totalCost = ((distance / mpg) * gasPriceWithoutDollar).toFixed(2)

  return (
    <div className="results-container"> 
      <div className='card'>
        <p>Average Gas Price</p>
        <p>{gasPrice}</p>
      </div>
      <div className='card'>
        <p>Miles Per Gallon</p>
        <p>{mpg}</p>
      </div>
      <div className='card'>
        <p>Distance</p>
        <p>{distance === null ? 0 : distance} miles</p>
      </div>
      <div className='card'>
        <p>Total cost:</p>
        <p>${totalCost}</p>
      </div>
    </div>
  );
}

export default Results;
