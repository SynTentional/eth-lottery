pragma solidity ^0.4.17;

contract Lottery {
    // address data type with public access
    // access is public for front-end
    address public manager;
    address[] public players;

    function Lottery() public{
        // whenever we create a contract
        // we receive the sender's address
        manager = msg.sender;
    }

    // payable keyword is for funcs that send
    // ether 
    function enter() public payable {
        // send along some amount of ETH
        players.push(msg.sender);
    }

}