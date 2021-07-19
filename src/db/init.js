const Database = require('./config') // importa o 'config

// guarda as funções 
const initDb = {
    async init() {  // requerido async para usar await
        const db = await Database() // await é usado devido ao tempo de execução do código js

        await db.exec(`CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )`);

        await db.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT,
                room INT
            )`);

        await db.close();
        // para rodar novamente o arquivo db "npm run init-db"
    }
}

initDb.init()