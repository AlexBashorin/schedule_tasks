const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

const Get_all_users = () => {
    return new Promise((res, rej) => {
        const query = 'SELECT * FROM users';
        connection.query(query, (err, results) => {
            if (err) {
                return rej(err)
            }
            res(results)
        })
    })
}

module.exports = { Get_all_users };