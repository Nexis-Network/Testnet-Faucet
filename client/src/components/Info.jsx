import { Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'

function Info() {
  return (
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <div>
      <Heading as='h2' size='xl' style={{ borderBottom: '2px solid #ccc' }}>
        npx <span style={{ backgroundColor: '#2ef2b1' }}>create-exzo-dapp</span>
      </Heading>
        </div>
<div style={{margin:'20px',maxWidth:'50%'}}>
<Text fontSize='lg'>
            Create a new Exzo blockchain-powered decentralized application with ease. This command-line tool automates the setup process, saving you time and effort in creating the initial project structure.
          </Text>
          <br />
          <Text fontSize='md' fontWeight='600' color='#2ef2b1' backgroundColor='black' maxWidth='fit-content' padding='3px'>Requirements</Text>
          <UnorderedList>
  <ListItem>Nodejs 16 or above</ListItem>
  <ListItem>Metamask</ListItem>
  <ListItem>Will to build</ListItem>
</UnorderedList>
          <br />
          <Text fontSize='md' fontWeight='600' color='#2ef2b1' backgroundColor='black' maxWidth='fit-content' padding='3px'>Usage</Text>
          <UnorderedList>
  <ListItem>Click on Connect button.If connected to Exzo testnet on Metamask or click on Add Exzo Network at bottom left.</ListItem>
  <ListItem>You will be able to see + and - button. With which you can increment / decrement value stored on chain.</ListItem>
  <ListItem>Click on any button and sign transaction and boom!</ListItem>
</UnorderedList>
</div>
    </div>
  )
}

export default Info
