const express = require('express')
const app = express()
const http = require('http');
var path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const op = require('./calculo')

const port = 3000;

let curso = ''
let modulo = ''
let pago = ''

app.use(bodyParser.urlencoded({ extend: true }))
app.use(express.static(__dirname + '/public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

  app.get('/', (req, res) => {

    res.render('index')
  })

  app.get('/course', (req, res) => {

    res.render('course')
  })

  app.get('/module', (req, res) => {

    res.render('module')
  })

  app.get('/pay', (req, res) => {

    res.render('pay')
  })

  app.post('/module', (req, res) => {

    curso = req.body.course

    res.render('module', {
      curso,
    })
  })

  app.post('/pay', (req, res) => {

    modulo = req.body.module

    res.render('pay', {
      modulo,
    })
  })

  app.post('/message', (req, res) => {

    pago = req.body.pay

    let costo = op.Price(curso)
    let descuento = op.Discount
    (pago)

    let costo_final = costo - (costo * (descuento / 100))

    res.render('message', {
      curso,
      modulo,
      pago,
      costo_final,
      costo,
      descuento
    })
  })
module.exports = app;
