module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', '178.128.205.117'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'inmateria'),
        user: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
       },
      },
      debug: false,
  },
});