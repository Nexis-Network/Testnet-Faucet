import React from 'react'
import { Divider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

function Footer(props) {
  return (
    <div className='footer'>
<Divider/>
<Button style={{margin:'20px'}} onClick={props.addNetwork}><img src='/metamask.png' style={{maxWidth:'20px',marginRight:'10px'}} /> Add Exzo Testnet </Button>
    </div>
  )
}

export default Footer