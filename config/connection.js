const { connect, connection } = require("mongoose");

//connection to our mongodb
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:2701/?directConnection=true";

connect(connectionString);

module.exports = connection;
