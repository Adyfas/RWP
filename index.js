const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const response = require('./response')

const PORT = 3000

app.use(express.json())
app.use(cors())

const FileData = 'requests.json'

app.get('/requests', (req, res)=>{
    fs.readFileSync(FileData,(err, data)=>{
        if(err){
            response(500, 'Error'+err, null, null, true, res)
        }else{
            const datas = JSON.parse(data)
            response(500, 'Success!', datas, datas.length, false, res)
        }
    })
})

app.post('/requests/bang', (req,res)=>{
    const { name, requests } = req.body
    if(!name || !requests){
        response(500, 'Error: Some data is null, please make sure to avoid null values', null, null, true, res)
    }else{
        fs.readFileSync(FileData, (err, data)=>{
            if(err){
                response(400, 'Error'+err, null, null, true, res)
            }else{
                const dataJson = JSON.parse(data)
                const id = dataJson.length
                const newData ={ id, name, requests }
                dataJson.push(newData)
                fs.writeFileSync(file, JSON.stringify(dataJson), (err)=>{
                    if(err){
                        response(400, 'Error'+err, null, null, true, res)
                    }else{
                        const datas = JSON.parse(data)
                        response(200, 'Success!', datas, datas.length, false, res)
                    }
                })
            }
        })
    }
})



app.listen(PORT, ()=>{
    console.log(`https://localhost:${PORT}`)
})