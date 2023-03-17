import { Sequelize } from "sequelize";

const DB_NAME='mydb';
const DB_USER='root';
const DB_PASS='mysql';
const DB_CONFIGS = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIGS);

(async () => {
    try {
        await db.authenticate();
        console.error('conectado com sucesso');
} catch (err) {
    console.error(err)
}
})();

export {db};
