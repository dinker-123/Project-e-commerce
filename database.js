const mysql = require('mysql');

const con= mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    port:'3306',
    database:'mydb',
    password:""
});

con.connect((err,res) =>{
    if(err){
        console.log("Connection error");
    }else{
        console.log("Connect the database");
    }
});

// con.query("CREATE DATABASE mydb",(err,res) =>{
//     if(err){
//         console.log("Database is not created");
//     }else{
//         console.log("Create DataBase");
//     }
// });

// con.query("Create table orders(orderId int not null, primary key(orderId),foreign key(id) references user(id)"
// , (err, res) => {
//     if(err){
//         console.log("Table is not created");
//     } else {
//         console.log("Created table");
//     }
// });
module.exports = con;      