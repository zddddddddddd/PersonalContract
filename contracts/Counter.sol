//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract Counter {
    uint public counter;

    constructor(uint x) {
        counter = x;
    }

    function count() public {
        counter = counter + 1;
        console.log("counter is %s ", counter);
    }

    function get() public view returns (uint) {
        return counter;
    }
}
