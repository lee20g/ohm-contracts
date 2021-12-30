import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

require("@nomiclabs/hardhat-waffle");
require('@typechain/hardhat')
require('@nomiclabs/hardhat-ethers')

import "hardhat-deploy";

import "@nomiclabs/hardhat-etherscan";

module.exports = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 120000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 18000000,
      
    },
    kovan: {
      url: `https://kovan.infura.io/v3/8523f21f27bd4e5f802afb2c7d87ce9b`,
      accounts: [process.env.KOVAN_PRIVATE_KEY],
    },
    ftm: {
      url: `https://rpc.ftm.tools/​`,
      accounts: [process.env.FTM_PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.7.5',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: './typechain',
    target: process.env.TYPECHAIN_TARGET || 'ethers-v5',
  },
};