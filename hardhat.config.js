// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync("./secrets/metamaskSecret").toString()
const projectId = "83106b60c2b746a38eda42bce25a2980"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/83106b60c2b746a38eda42bce25a2980',
      accounts: [privateKey],
      gasPrice: 8000000000,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
