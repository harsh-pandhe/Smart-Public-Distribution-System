//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RationDistribution {
    struct Beneficiary {
        string name;
        uint256 entitlement;
        uint256 claimed;
        bool exists;
    }
    mapping(address => Beneficiary) public beneficiaries;

    event BeneficiaryAdded(address indexed user, string name, uint256 entitlement);
    event RationClaimed(address indexed user, uint256 amount);

    function addBeneficiary(address _user, string memory _name, uint256 _entitlement) public {
        require(!beneficiaries[_user].exists, "Beneficiary already exists");
        beneficiaries[_user] = Beneficiary(_name, _entitlement, 0, true);
        emit BeneficiaryAdded(_user, _name, _entitlement);
    }
}