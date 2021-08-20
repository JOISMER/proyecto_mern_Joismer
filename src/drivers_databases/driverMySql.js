const mysql=require('mysql');
const connection=mysql. createConnection({
    host:'localhost',
    user:'root@localhost',
    password:'',
    database:'Mi administrador de notas'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql vamos otra vez Conexion');

});
module.exports = mysql;