import express from 'express';

const app=express();
const PORT=3001;

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/index.html`)
})
app.get('/submit',(req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`)
})
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})

