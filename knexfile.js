module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/budget.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'nodedb1',
      user: 'postgres',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
