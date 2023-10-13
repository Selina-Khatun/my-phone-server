const express=require('express');
const phones=require('./phones.json')
const app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send('my phones information are coming soon')
});

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    // const id =req.params.id;

// In the nodemon ,id is shown as a string but in the json file id is a number .For this reason output is not shown .I have to convert id *parseInt*
const id =parseInt(req.params.id); 

 // 14 no line was given me an error *** (TypeError: Cannot read properties of undefined (reading 'id')
//     at C:\projects\my-phone-server\index.js:14:26) *** because i wrote  res  instead of req.

    console.log('i need data for id: ',id);
  
    const phone=phones.find(phone=>phone.id===id) || {};
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`my phone server is running on port :${port}`)
})