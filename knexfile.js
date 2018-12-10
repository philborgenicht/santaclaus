module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/santa_db'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/santa_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
