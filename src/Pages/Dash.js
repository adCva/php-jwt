import React, { useState } from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';

function Dash() {
  const [register, setRegister] = useState(false);

  return (
    <div className='dash'>
      <div className='center-form-container'>
        {register ? (
          <div></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Dash;