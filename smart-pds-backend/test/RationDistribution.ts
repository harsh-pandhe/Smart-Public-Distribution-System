import { expect } from "chai";
import { ethers } from "hardhat";

describe("RationDistribution", function () {
    it("Should set and get allocation", async function () {
        const [owner, beneficiary] = await ethers.getSigners();

        const RationDistribution = await ethers.getContractFactory("RationDistribution");
        const rationDistribution = await RationDistribution.deploy();
        await rationDistribution.waitForDeployment();

        // Set allocation
        const tx = await rationDistribution.setAllocation(beneficiary.address, 100);
        await tx.wait();

        // Verify allocation
        const allocation = await rationDistribution.getAllocation(beneficiary.address);
        expect(allocation).to.equal(100);
    });
});
