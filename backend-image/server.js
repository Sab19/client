const express=require('express')
const bodyParser=require('body-parser')
const db=require('./db')
const app=express()
app.use(bodyParser.json())

app.post('/user/register',(request,response)=>{
const{firstname,lastname}=request.body
const statement=`insert into user_tbl(firstname,lastname) values('${firstname}','${lastname}')`
db.query(statement,(error,result)=>{
    if(error){
        response.send({status:'error',error:error})
    }else{
        response.send({status:'success', data:result})
    }
})
})

app.listen(4000,'0.0.0.0',()=>{
console.log('Server started')
})