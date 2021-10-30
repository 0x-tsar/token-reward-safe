const Reward = artifacts.require("Reward");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(Reward);
  const reward = await Reward.deployed();

  await deployer.deploy(Token, reward.address);
  const token = await Token.deployed();
};
