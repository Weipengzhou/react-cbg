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
  
  //关于我们
  server.get('/gywm', (req, res) => {

    const actualPage = '/gywm'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })

 //法律声明
 server.get('/flsm', (req, res) => {

  const actualPage = '/flsm'
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
  //公司介绍页
  server.get('/:id/gs/:id/jieshao', (req, res) => {

    const actualPage = '/jieshao'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })
  //公司设计师列表页
  server.get('/:id/gs/:id/sheji', (req, res) => {

    const actualPage = '/design'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })
 //公司设计师详情页
 server.get('/:id/gs/:id/sheji/:id', (req, res) => {

  const actualPage = '/designer'
  const queryParams = { 
      id: req.params.id 
  } 
  app.render(req, res, actualPage, queryParams)
})

//装修公司工地列表
server.get('/:id/gs/:id/gongdi', (req, res) => {

  const actualPage = '/gongdi'
  const queryParams = { 
      id: req.params.id 
  } 
  app.render(req, res, actualPage, queryParams)
})
//装修公司工地详情页
server.get('/:id/gs/:id/gongdi/:id', (req, res) => {

  const actualPage = '/gdxq'
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