// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // fungible_token.sol
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const Amount = (await deployer.getBalance()).toString();
  console.log("Account balance:", (await ethers.utils.formatEther(Amount)));

  const Token = await ethers.getContractFactory("fungible_token");
  const token = await Token.deploy();
  console.log("Token address:", token.address);

  // NFT_market.sol
  const NFTMarket = await hre.ethers.getContractFactory("MetaMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed(token.address);
  console.log("NFT_market deployed to:", nftMarket.address);

  // NFT.sol
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
