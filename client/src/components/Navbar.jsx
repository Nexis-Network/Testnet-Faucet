import React from 'react';
import { Button } from '@chakra-ui/react';

function Navbar(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ order: 1 }}>
        <img src="/exzo.png" alt="" className='exzo-logo' />
      </div>
    </div>
  )
}

export default Navbar;
