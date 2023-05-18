const connectToMongo=require("./db");
const express = require('express');

connectToMongo();
const app = express();
const port=3000;

//middleware to use req.body in auth
app.use(express.json())

//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/article',require('./routes/article'));


//Available routes


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})