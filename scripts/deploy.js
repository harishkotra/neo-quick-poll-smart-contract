const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const NeoQuickPoll = await hre.ethers.getContractFactory("NeoQuickPoll");
  console.log("Deploying NeoQuickPoll...");
  
  const baseFee = 20000000000; // 20 Gwei (base fee)
  const priorityFee = 20000000000; // 20 Gwei (priority fee)

  // Ensure maxFeePerGas includes both base fee and priority fee
  const neoQuickPoll = await NeoQuickPoll.deploy({
    maxFeePerGas: baseFee + priorityFee, // 40 Gwei in total
    maxPriorityFeePerGas: priorityFee, // 20 Gwei as required
    type: 2 // EIP-1559 transaction
  });

  console.log("NeoQuickPoll deployed to:", JSON.stringify(neoQuickPoll));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
