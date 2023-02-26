const alchemyKey = 'https://polygon-mumbai.g.alchemy.com/v2/qbYWh5NN0dWxk8KtAxPJRVwwFd83lTOf';
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
//web3 is basically the code asking to alchemy 
//through web3.js by providing alchemy with ABI and address
//Asking alchemy to provide me with smart contract info from mumbai chain
//deployed on its node.

// const ToDoAbi = require('./artifacts/contracts/ToDoApp.sol/ToDoApp.json')

//Add the files in build or replace them with the abi from remix
const ToDoAbi = require('./build/ToDoApp.json')
const contractAddress = "0x8c3e4dB6dCCcD08d08995C689A5EC15ED0b2E244";

export const ToDoContract = new web3.eth.Contract(
    ToDoAbi, contractAddress
)