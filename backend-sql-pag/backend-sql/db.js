import mysql from 'mysql2/promise'
import 'dotenv/config'

const db = mysql.createPool(process.env.CONEXAO)

export default db
