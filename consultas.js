const { Pool } = require('pg')

const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: 'Francisco90.',
database: 'likeme',
port: 5433,
allowExitOnIdle: true
})

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log('Post agregado con exito')
    return result 
    }
//agregarPost("hola", "ndcnjdnjcdnjd.cl", "jcndjncjn");
    
const obtenerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}
//obtenerPost();

module.exports = {agregarPost, obtenerPost};