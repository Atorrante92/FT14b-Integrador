const server = require('./app');
const { conn, User } = require('./DB_connection');
const PORT = 3001;

conn.sync({ force: false })
.then(() =>
  server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
  })
)
.then(async() => {
  try {
    const newUser = await User.create({
      email: 'na@mail.com',
      password: '1234'
    })
  } catch (error) {
    console.log(error);
  }
})
.catch(error => {
  console.log(error);
})
