# eth-lottery

![Ethereum Banner](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freebsdnews.com%2Fwp-content%2Fuploads%2FETHEREUM_NAV-BAR-LOGO.png&f=1&nofb=1)

This project features a smart contract that allows players to bet ETH in a lottery.

![Lottery Banner](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestbitcoingames.com%2Fwp-content%2Fuploads%2F2018%2F02%2FEthereum-Lottery.png&f=1&nofb=1)

**Lottery Contract**

There are two main variables here, a manager and a player.
1. **Manager**: Address of the person who created the contract
2. **Players**: An array of addresses of people who have entered the raffle

With these two variables, there are also two main functions of this contract:
1. **enter**: Enters a player into the lottery
2. **pickWinner**: Randomly picks a winner and sends them the prize pool

**Tech Stack**
This project utilizes Solidity & JavaScript

**Resources and Credits**
Credits to Stephen Grider's Ethereum and Solidity: The Complete Developer's Guide