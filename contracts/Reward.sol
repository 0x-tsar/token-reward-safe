// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Reward is ERC20 {
    constructor() ERC20("Recompensa Token", "RTO") {
        //Needs to send these to the Token contract to fund with rewards to distribute
        _mint(msg.sender, 101 * 10**18);
    }
}
