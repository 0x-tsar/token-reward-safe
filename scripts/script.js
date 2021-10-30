const Reward = artifacts.require("Reward");
const Token = artifacts.require("Token");

module.exports = async () => {
  try {
    const [account, account2] = await web3.eth.getAccounts();
    const reward = await Reward.deployed();
    const token = await Token.deployed();

    /// @dev Set a rewards schedule
    //    function setRewards(
    //     uint32 start,
    //     uint32 end,
    //     uint96 rate
    // ) external auth {

    const timestamp = new Date().getTime();
    console.log(timestamp);

    const rate = web3.utils.toWei("0.1");

    // console.log(timestamp + 31556952000 * 10000);

    // const tx = await token.setRewards(
    //   timestamp + 10000, //now
    //   timestamp + 20000, //100_000 years aprox.
    //   rate
    // );

    // console.log(tx);

    const value = web3.utils.toWei("1");
    const valueSend = web3.utils.toWei("5");
    console.log(account);

    // const tx = await token.claim(account);
    // console.log(tx);

    // const myBalance = await reward.balanceOf(account);
    // console.log(`myBalance: ${myBalance}`);
    //
    // sending reward token to contract
    // const tx = await reward.transfer(token.address, valueSend);
    //
    // console.log(tx);
    // let balance = await reward.balanceOf(token.address);
    // console.log(balance.toString());

    // setInterval(async () => {
    //   await token.claim(account);
    //   let balanceReward = await reward.balanceOf(account);
    //   console.log(`balanceReward: ${web3.utils.toWei(balanceReward)}`);

    //   let contractBalance = await reward.balanceOf(token.address);
    //   console.log(`should be decreasing ${contractBalance}`);

    //   let myEthers = await web3.eth.getBalance(account);
    //   console.log(`myEthers: ${myEthers}`);

    //   // let balanceToken = await token.balanceOf(account);
    //   // console.log(`balanceToken: ${web3.utils.toWei(balanceToken)}`);
    // }, 10_000);
    // //
  } catch (error) {
    console.log(error);
  }
};
