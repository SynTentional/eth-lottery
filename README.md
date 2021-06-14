# eth-lottery

This project features a smart contract that allows players to bet ETH in a lottery.

There are two main variables here, a manager and a player.
1. **Manager**: Address of the person who created the contract
2. **Players**: An array of addresses of people who have entered the raffle

With these two variables, there are also two main functions of this contract:
1. **enter**: Enters a player into the lottery
2. **pickWinner**: Randomly picks a winner and sends them the prize pool