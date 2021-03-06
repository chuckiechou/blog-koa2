const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../util/crypto')

const login = async (username, password) => {
    username = escape(username);
    password = genPassword(password);
    const sql = `select username,realname from users where username='${username}' and password='${password}'`;
    const rows = await exec(sql);
    return rows[0] || {};
}

module.exports = {
    login
}