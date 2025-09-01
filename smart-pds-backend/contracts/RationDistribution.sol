// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RationDistribution {
    address public owner;
    mapping(address => uint256) public allocations;

    event AllocationUpdated(address indexed beneficiary, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function setAllocation(address _beneficiary, uint256 _amount) external {
        require(msg.sender == owner, "Not authorized");
        allocations[_beneficiary] = _amount;
        emit AllocationUpdated(_beneficiary, _amount);
    }

    function getAllocation(address _beneficiary) external view returns (uint256) {
        return allocations[_beneficiary];
    }
}
