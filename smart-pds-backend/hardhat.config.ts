import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache default
      accounts: [
        "0x7a934c39d4891a6d1df28e91bd86ee3eb0f45108653f40c1866d5aed46e60922"
      ]
    }
  }
};

export default config;
