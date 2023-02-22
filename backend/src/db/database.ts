import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

interface IConnection extends mysql.Connection {
  promise: () => any
}

export const connection = (
  mysql.createConnection({
    host: 'localhost',
    user: process.env.user || '',
    database: process.env.database || '',
    password: process.env.password || '',
  }) as IConnection
).promise()

export const request = async (sqlRequest: string, func = (res) => res[0]) => {
  return await connection.query(sqlRequest).then((res) => func(res))
}
