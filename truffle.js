module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4500000
    },
    testnet: {
      network_id: 3,
      host: "localhost",
      from: "0xCdB5E7828D440e3970be3bD29a8Fa2a82ee399a7",
      port: 8546, // Different than the default below
      gas: 4600000  // Gas limit
    },
    real: {
      network_id: 1,
      host: "localhost",
      port: 8545  // Different than the default below
    }
  }
};