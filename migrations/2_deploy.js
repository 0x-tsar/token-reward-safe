const Reward = artifacts.require("Reward");
const Token = artifacts.require("Token");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Reward);
  const reward = await Reward.deployed();

  await deployer.deploy(Token, reward.address);
  const token = await Token.deployed();

  console.log(accounts[0]);
  console.log(network);

  //pass to the rewarding contract all the funds
  let allRewards = await reward.balanceOf(accounts[0]);
  let tx = await reward.transfer(token.address, allRewards);
  console.log(tx);
  allRewards = await reward.balanceOf(accounts[0]);
  let contractsBalance = await reward.balanceOf(token.address);
  console.log(allRewards.toString());
  console.log(contractsBalance.toString());
};
