import { useEffect } from 'react'
import axios from 'axios'

function GasPrice( {setGasPrice} ) {

  useEffect(() => {
    fetchGasPrice();
  }, []);

  const fetchGasPrice = async () => {
    try {
      const response = await axios.get('https://us-central1-borrowedfuel.cloudfunctions.net/api/gas-price')
      const { gasPrice } = response.data
      setGasPrice(gasPrice);
    } catch (error) {
      console.error('Error fetching gas price:', error)
    }
  }

  return (
    null
  )
}

export default GasPrice