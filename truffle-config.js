module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  //Testing visual debbuger - Ivy
  plugins: [
    "truffle-plugin-debugger"
  ]
};
