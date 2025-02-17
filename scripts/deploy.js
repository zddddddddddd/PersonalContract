const { ethers } = require("hardhat");

async function main() {

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    await counter.waitForDeployment();

    console.log("Counter address:", counter.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});