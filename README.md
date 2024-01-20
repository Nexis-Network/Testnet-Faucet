# Nexis-faucet
testnet faucet for Nexis Network

<a href="https://exzo-faucet.netlify.app/">Open Faucet</a>


# Run Locally
Run the following commands 
```
git clone https://github.com/Nexis-Network/Testnet-Faucet faucet
cd faucet
yarn install:client
yarn install:server
```

now create a .env file by writing the following commands
```
cd server
cp .env.sample .env
```

now update the .env variables
run it locally 

```
yarn dev:server
```

now open a new terminal and run 

```
yarn dev:client
```
this will run the client and server
server at 3000 port and client at 5713
now go to localhost:5713

## Deployment
For deployment, first you need to deploy the server , you can do it just like we do any nodejs application

And for client , you need to replace one url before deployment of client,there is a variable in app.jsx file which is FAUCET_ENDPOINT, you need to put the deployed url of server there.

After updating the url just go to cd client and run yarn build , it will build the files deploy it 
