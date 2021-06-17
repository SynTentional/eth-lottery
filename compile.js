// Importing modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol')
// read contents of file
const source = fs.readFileSync(inboxPath, 'utf8');

//call compiler and access solidity code
module.exports = solc.compile(source, 1).contracts[':Inbox'];
//this will access the bytecode source (to add to network) and ABI