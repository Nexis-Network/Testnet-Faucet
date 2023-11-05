import React, { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Button, Heading,Input,Text } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const toast = useToast();
  const [inputAddress,setInputAddress] = useState('');
  const FAUCET_ENDPOINT ="https://exzo-faucet.vercel.app/faucet";
  // const FAUCET_ENDPOINT ="http://localhost:8080/faucet";

  const addNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x942',
          chainName: 'Exzo Testnet',
          nativeCurrency: {
            name: 'Exzo',
            symbol: 'XZO',
            decimals: 18,
          },
          rpcUrls: ['https://evm-test.exzo.network'],
          blockExplorerUrls: ['https://evm-testnet.exzoscan.io/'], 
        }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async()=>{
    if(inputAddress.length!=42){
      toast({
        title: "Invalid Address",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }else{
      const {data} = await axios.post(FAUCET_ENDPOINT,{address:inputAddress})
      console.log(data)
      if(data.sent){
        toast({
          title: "Sent tokens successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }else{
        toast({
          title: data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <div className='app-container'>
      <Navbar/>
        <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <Heading as='h2' size='xl' style={{ borderBottom: '2px solid #ccc' }}>
          
        EXZO <span style={{ backgroundColor: '#2ef2b1' }}>Faucet</span>
      </Heading>
      <div style={{margin:'20px',maxWidth:'60%'}}>

      <Text fontSize='lg'>
          NOTE: We only send testnet EXZO , which don't have any financial significance.
          </Text>
         
          </div>
          <Input placeholder='Paste Address' size='lg' width={"65vw"} value={inputAddress} onChange={e=>setInputAddress(e.target.value)}/>
          <br />
          <Button className='connect-button' onClick={handleClick}>Receive 10 Test EXZO</Button>
        </div>

      <Footer addNetwork={addNetwork} />
    </div>
  );
}

export default App;
