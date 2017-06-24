var Migrations = artifacts.require("./Migrations.sol");
var Trustcoin = artifacts.require("./Trustcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Trustcoin, web3.eth.accounts[0], {gas: 4500000});  // enough gas
  //deployer.deploy(Trustcoin, web3.eth.accounts[0], {gas: 4000000});
};
