// Importing modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');


const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol')
// read contents of file
const source = fs.readFileSync(lotteryPath, 'utf8');

//call compiler and access solidity code
module.exports = solc.compile(source, 1).contracts[':Lottery'];
//this will access the bytecode source (to add to network) and ABI