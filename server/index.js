const express = require('express')
const cors = require('cors')
const sql = require('mysql2')
const db = require('./utils/database')

const SELECT_ALL_COMMENTS = 'SELECT * FROM comment'
const app = express()

app.use(cors())

app.get('/comments', (req, res) => {
    db.execute(SELECT_ALL_COMMENTS)
        .then(([rows]) => {
            return res.json({
                data: rows
            })
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/comments/add', (req, res) => {
    const {comment} = req.query;
    const ADD_COMMENT = `INSERT INTO comment (comment) VALUES(${comment})`
    db.execute(ADD_COMMENT)
        .then(result => {
            return res.send('successfully added')
        })
        .catch(err => {
            res.send(err)
        })
})

app.listen(4000, () => {
    console.log('product listinng')
})