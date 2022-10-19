const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const route = require('./route')
const api  = express()

api.set('port', process.env.PORT || 8000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'supermercado'
}

api.use(myconn(mysql,dbOptions, 'single'))
api.use(express.json())

api.get('/', (req,res)=>{
    //res.send('prueba')
})

api.use('/api', route)

api.listen(api.get('port'), ()=>{
    console.log('server online ', api.get('port'))
})

