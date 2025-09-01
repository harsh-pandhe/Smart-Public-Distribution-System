import { ethers } from "hardhat";

async function main() {
    const RationDistribution = await ethers.getContractFactory("RationDistribution");
    const rationDistribution = await RationDistribution.deploy();

    await rationDistribution.waitForDeployment();

    console.log("✅ RationDistribution deployed at:", await rationDistribution.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
