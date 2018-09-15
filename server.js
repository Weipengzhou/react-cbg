const express = require('express')
const next = require('next')
const compression = require('compression')
const querystring = require("querystring");
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  if (!dev) {
    server.use(compression()) //gzip
  }
  //首页
  server.get('/', (req, res) => {

    const actualPage = '/'
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
    console.log('> Ready on http://localhost:3001')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})