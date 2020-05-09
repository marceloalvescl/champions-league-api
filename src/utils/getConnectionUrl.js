module.exports = (dialect, user, password, host, port, databaseName) =>
  `${dialect}://${user}:${password}@${host}:${port}/${databaseName}`;
