import React, { useState } from 'react';
import axios from 'axios';
import './styles/form.css'

const Form = ( { setMpg, setDistance }) => {
  const [carModel, setCarModel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/form', { carModel });
      const { mpg } = response.data;
      carModel === '' ? setMpg(0) : setMpg(mpg)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label className='car-label'>
          Car Model 
          <input className='car-input' type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
        </label>
        <button className='submit-btn' type="submit">Submit</button>
        <br/>
        <br />
        <label className='distance-label'>
            Distance Traveled (miles)
            <input className='distance-input' defaultValue={0} type="number" onChange={(e) => setDistance(e.target.value)} />
        </label>
        <br/>
      </form>
    </div>
  );
};

export default Form;
