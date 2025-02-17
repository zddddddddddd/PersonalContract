require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  networks: {
    bsc: {
      url: process.env.BSC_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY,
    },
  },
};
