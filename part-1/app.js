const express = require('express')
const bodyParser = require('body-parser').json()
const app = express()

app.use(bodyParser)

app.get('/api/shout/:word', (req, res) => {
  const shout = req.params.word.toUpperCase() + '!!!'
  res.json({
    method: req.method,
    response: shout,
    status: res.statusCode
  })
})

app.post('/api/array/merge', (req, res) => {
  const array1 = req.body.array1
  const array2 = req.body.array2

  const mixArrays = array1.map((x, i) => [x, array2[i]])
  const flattenArrays = mixArrays.reduce((a, b) => {
    return a.concat(b)
  }, [])
  res.json({response: flattenArrays})
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.send('error')
})

app.listen(3000, () => {
  console.log('listening!');
})

//
// GET /api/shout/:word
// POST /api/array/merge
