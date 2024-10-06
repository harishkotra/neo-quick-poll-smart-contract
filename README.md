# Neo Quick Poll Smart Contract

This repository contains the smart contract for Neo Quick Poll, a decentralized polling application built on the NeoX T4 Testnet. NeoQuickPoll enables transparent and secure community-driven decision-making.

## Prerequisites

- Node.js (v20.0.0 or later)
- npm (v6.0.0 or later)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/harishkotra/neo-quick-poll-smart-contract.git
   cd neo-quick-poll-smart-contract
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Smart Contract

The `NeoQuickPoll.sol` file contains the smart contract code. It includes functions for creating polls, voting, and retrieving poll results.

## Compilation

To compile the smart contract:

```
npx hardhat compile
```

## Testing

To run the test suite:

```
npx hardhat test
```

## Deployment

To deploy the smart contract to the NeoX T4 Testnet:

1. Create a `.env` file (optional) in the root directory with the following content:
   ```
   NEOX_T4_RPC_URL=https://neoxt4seed1.ngd.network
   ```

2. Run the deployment script:
   ```
   npx hardhat run scripts/deploy.js --network neoX
   ```

## Contract Address

After deployment, the contract address will be displayed in the console. Make sure to update the `CONTRACT_ADDRESS` in the frontend application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.