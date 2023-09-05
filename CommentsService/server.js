const express = require('express');
const port = 3001;
const routes = require('./routes')
const errorHandler = require('./errorHandler')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/posts/:id/comments/', routes)


app.get('/', (req, res) => {
    res.send('welcome to comments service');
});

app.use(errorHandler)

app.listen(port, () => {
    console.log(`post service listening on port ${port}`);
});

