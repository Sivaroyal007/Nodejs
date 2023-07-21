var express = require('express');


const app =express();

app.listen(5000,()=>{
    console.log('server is up');
});

app.get('/',(req,res)=>{
    res.send("Hey shiva")
})
app.get('/shiva',(req,res)=>{
    res.send("Hey how are")
})