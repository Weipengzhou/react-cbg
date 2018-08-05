const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  //免费设计
  server.get('/sheji', (req, res) => {

    const actualPage = '/sheji'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })
  //免费报价
  server.get('/baojia', (req, res) => {

    const actualPage = '/baojia'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })
  //免费验房
  server.get('/yanfang', (req, res) => {

    const actualPage = '/yanfang'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })

  //地区首页
  server.get('/:id', (req, res) => {

    const actualPage = '/shouye'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })
  //公司列表
  server.get('/:id/gs', (req, res) => {

    const actualPage = '/gs'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })

  //公司详情页
  server.get('/:id/gs/:id', (req, res) => {

    const actualPage = '/gs_index'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})