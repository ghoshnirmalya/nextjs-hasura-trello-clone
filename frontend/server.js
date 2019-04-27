const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/boards', (req, res) => {
      app.render(req, res, '/boards')
    })

    server.get('/boards/new', (req, res) => {
      app.render(req, res, '/boards/new')
    })

    server.get('/boards/:id/edit', (req, res) => {
      app.render(req, res, '/boards/edit', {
        id: req.params.id,
      })
    })

    server.get('/boards/:id', (req, res) => {
      app.render(req, res, '/boards/show', {
        id: req.params.id,
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
