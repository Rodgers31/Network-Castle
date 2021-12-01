// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/networkcastle.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations',
    },
    seeds: {
      directory: './api/data/seeds',
    },
  },
  production: {
    // etc
  },
  testing: {
    // etc
  },
};
