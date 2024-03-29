
const Web3 = require('web3');
const ToDoFactory = require('./build/ToDoApp.json');
// require("@nomiclabs/hardhat-web3");




const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(ToDoFactory.abi)
    .deploy({data: ToDoFactory.evm.bytecode.object})
    .send( {from:accounts[0], gas:'3000000'});

    console.log('Contract deployed to: ', result.options.address);
    
};

deploy();

// Contract deployed to:  0xF56Ca5A918a8a3132537c3217f2D7eFEF5726521
    // "test": "echo \"Error: no test specified\" && exit 1",
