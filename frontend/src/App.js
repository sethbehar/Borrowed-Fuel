import GasPrice from './GasPrice';
import Form from './Form'
import Results from './Results';
import Header from './Header';
import { useState } from 'react'

function App() {
  const [mpg, setMpg] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  const [distance, setDistance] = useState(null);

  return (
    <div>
      <Header />
      <Form setMpg={setMpg} setDistance={setDistance}/>
      <GasPrice setGasPrice={setGasPrice}/>
      <Results mpg={mpg} gasPrice={gasPrice} distance={distance}/>
    </div>
  );
}

export default App;
