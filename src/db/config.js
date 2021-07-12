const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

module.exports = () => {
    // Abre o banco de dados
    open({
        filename: '/src/db/rocketq.sqlite',
        driver: dqlite3.Database,
    });
}