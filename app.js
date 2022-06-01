const express = require('express');
const app = express();
const routerCommon = require('./routes/dataRoute');
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use('/api/v1/data',routerCommon);
app.use(express.static('./Assets/Pages'));
app.use(express.static('./Assets/'));
app.use(express.static('./Assets/JS'));
app.use(express.static('./Assets/images'));
app.listen(3300,()=>{
    console.log("Server is listening on port 3300");
})