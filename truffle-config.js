const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    DecentralizedVotingSystem: {
      network_id: "*",
      host: "127.0.0.1",
      port: 7545,
      gas: 6721975,
      gasPrice: 20000000000,
    },
  },
};
