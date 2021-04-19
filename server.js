<<<<<<< HEAD
const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)

  res.end()
})

function respondHello(req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
=======
>>>>>>> 456ab3e (fiat lux)
