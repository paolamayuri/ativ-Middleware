const express = require('express');
const time = require('./middleware/time');
const validateServiceTime = require('./middleware/validateServiceTime');
const app = express ();

app.use(express.json());
app.use(time);

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/hora', validateServiceTime,(req, res)=>{
    res.send(Hora: ${req.time});
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
})