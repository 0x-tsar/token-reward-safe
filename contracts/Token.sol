// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";
// import "./yields-utils-v2/token/ERC20Rewards.sol";

import "./yields-utils-v2/token/ERC20.sol";
import "../contracts/yields-utils-v2/token/ERC20Rewards.sol";

contract Token is ERC20Rewards {
    constructor(address rewardsToken)
        ERC20Rewards("Reward Token", "REWR", 18, IERC20(rewardsToken))
    {
        _mint(msg.sender, 1 * 10**18);

        setRewards(
            uint32(block.timestamp),
            uint32(block.timestamp + (365 days * 10000)), //100_000 years
            0.001 ether
        );
    }
}
