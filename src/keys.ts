export default {

  // database: {
  //   host: '213.190.6.64',
  //   user: '	u235754512_braian',
  //   password: 'braian',
  //   database: 'u235754512_games'
  // }
  // database: {
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'ng_pruebas_db'
  // }
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }

}