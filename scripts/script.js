const Reward = artifacts.require("Reward");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  try {
    const [account] = await web3.eth.getAccounts();
    const reward = await Reward.deployed();
    const token = await Token.deployed();

    /// @dev Set a rewards schedule
    //    function setRewards(
    //     uint32 start,
    //     uint32 end,
    //     uint96 rate
    // ) external auth {

    const value = web3.utils.toWei("1");
    const valueSend = web3.utils.toWei("5");
    console.log(account);

    // const tx = await token.claim(account);
    // console.log(tx);

    // sending reward token to contract
    // await reward.approve(token.address, valueSend);
    // const tx = await reward.transfer(token.address, valueSend);
    // console.log(tx);
    // let balance = await reward.balanceOf(token.address);
    // console.log(balance.toString());
    // console.log(`done`);

    setInterval(async () => {
      await token.claim(account);
      let balanceReward = await reward.balanceOf(account);
      console.log(`balanceReward: ${web3.utils.toWei(balanceReward)}`);

      let contractBalance = await reward.balanceOf(token.address);
      console.log(`should be decreasing ${contractBalance}`);

      let myEthers = await web3.eth.getBalance(account);
      console.log(`myEthers: ${myEthers}`);

      // let balanceToken = await token.balanceOf(account);
      // console.log(`balanceToken: ${web3.utils.toWei(balanceToken)}`);
    }, 10_000);
    // //
  } catch (error) {
    console.log(error);
  }
};
