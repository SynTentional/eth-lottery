pragma solidity ^0.4.17;

contract Lottery {
    // address data type with public access
    // access is public for front-end
    address public manager;

    function Lottery() public{
        // whenever we create a contract
        // we receive the sender's address
        manager = msg.sender;

    }
}