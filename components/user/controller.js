const store = require('./store');
const pool = require('../../db');

async function addUser(user){
    await pool.query('INSERT INTO users set ?', [user]);
}

async function getUsers(){
    const users = await pool.query('SELECT * FROM users');
    return users;
}

async function updateUser(id,user){
    //const userdata = pool.query('SELECT * FROM users WHERE ID = ?', [id]);
    await pool.query('UPDATE users set ? WHERE id = ?', [user,id]);
}

async function deleteUser(id){
    await pool.query('DELETE FROM users WHERE ID = ?', [id]);
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}