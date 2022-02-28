const express = require('express')
const cors = require("cors");
const api_helper = require('./API_helper')
const app = express()
const port = 8081

app.use(cors());

/*app.get('/', (req, res) => {
    api_helper.make_API_call('http://192.168.1.143/')
    .then(response => {
        res.json(response)
        console.log(response)
    })
    .catch(error => {
        res.send(error)
        console.log(error)
    })
})*/

let temperature_datas = new Array()

const fetch = require('node-fetch')
const time = new Date()
//setTime(time.toUTCString())

app.get('/', (req,res) => {
  res.status(200).json({
    staus:"Success",
    data: temperature_datas
  });
  
  
})

function saveData(metrics) {
  //console.log('time seconds',time.getSeconds())
  //console.log("metrics",metrics)
  //console.log('time seconds 2',time.getSeconds())
  temperature_datas.push({time: time.toUTCString(), temperature: metrics.Temperature})
  console.log(temperature_datas)

}

const getData = () => {
  fetch('http://192.168.1.143/')
    .then(response => response.json())
    .then(data => saveData(data))
    .catch(err => console.error(err))
}


const interval = setInterval(getData, 5000);

app.listen(port, () => console.log(`App listening on port ${port}!`))