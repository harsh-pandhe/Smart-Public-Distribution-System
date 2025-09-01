import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("RationDistributionModule", (m) => {
    const rationDistribution = m.contract("RationDistribution");
    return {
        rationDistribution
    };
});