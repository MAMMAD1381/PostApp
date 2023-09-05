const express = require('express');
const port = 3002;
const routes = require('./routes')
const errorHandler = require('./errorHandler')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(bodyParser.json())

app.use(cors())

app.use('/posts/', routes)

app.get('/', (req, res) => {
    res.send('welcome home');
});

app.use(errorHandler)

app.listen(port, () => {
    console.log(`post service listening on port ${port}`);
});

