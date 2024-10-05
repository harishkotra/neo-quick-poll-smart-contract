require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    neoX: {
      url: "https://neoxt4seed1.ngd.network/",
      accounts: ["be46986849bf63d7d6ec358edfaacbcfa29b92f3a7cc0048e0cdb6ab46b10218"],
      gasPrice: 20000000000,  // 20 Gwei
      maxPriorityFeePerGas: 20000000000, // 20 Gwei
      chainId: 12227332
    }
  }
};
 