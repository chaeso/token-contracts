var Migrations = artifacts.require("./Migrations.sol");
var Trustcoin = artifacts.require("./Trustcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Trustcoin, web3.eth.accounts[0], {gas: 2400000});
};
