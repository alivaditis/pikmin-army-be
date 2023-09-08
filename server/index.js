const express = require("express")

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

app.locals.pikmin = []

app.get('/api/v1/pikmin', (request, response) => {
  const pikmin = app.locals.pikmin;
  response.json({ pikmin });
});

app.post('/api/v1/pikmin', (request, response) => {
  const id = Date.now();
  const { name, type, stage } = request.body;
  app.locals.pikmin.push({ id, name, type, stage });
  response.status(201).json({ id, name, type, stage });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});