const {ethers} = require("hardhat");

async function main() {
  const whitelistcontract = await ethers.getContractFactory("Whitelist");
  const deployedWhiteListContract = await whitelistcontract.deploy(10);
  await deployedWhiteListContract.deployed();
  console.log("whitelist contract address", deployedWhiteListContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // whitelist contract address 0xd6987f742513f59a9F323DAFd6749155841752A5