export default () => ({
  database: {
    host: 'localhost',
    port: 5432,
    username: 'student',
    password: 'student',
    database: 'nest_project',
  },
  secretKey: process.env.JWT_SECRET || 'secret-key',
});
