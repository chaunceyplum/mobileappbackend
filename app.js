var express = require('express')
var app = express()
const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'ec2-18-188-115-177.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  password: 'post123',
  port: 5432,
})
client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

app.get('/', async (req, res) => {
  const userpostView = await client.query('SELECT * FROM public.userpost')
  const u = 0
  res.send({
    data: `${userpostView}`,
  })
})

app.post('/', function (req, res) {
  res.send({
    Output: 'Hello World!',
  })
})

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
