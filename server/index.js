require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ethers = require('ethers')

const app = express();

// Use the cors middleware
app.use(cors());
app.use(express.json()); 

const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider('https://evm-test.exzo.network');

async function signTransaction(address) {
  const wallet = new ethers.Wallet(privateKey, provider);

  const tx = {
    to: address,
    value: ethers.utils.parseEther('1000'),
    gasPrice: ethers.utils.parseUnits("2", 'gwei')
  };

  const signedTx = await wallet.sendTransaction(tx);
  console.log('Signed Transaction:', signedTx);
}


app.get('/', (req, res) => {
    res.send('Faucet Running!');
});



app.post('/faucet', async(req, res) => {
    try {
        const {address} = req.body;
        await signTransaction(address)
    res.status(200).send({sent:true});
    return;
    } catch (error) {
        res.status(200).send({sent:false,error});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=app;