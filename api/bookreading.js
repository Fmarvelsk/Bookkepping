const request = require('request-promise')

require('dotenv').config()

let options = {
    method: 'GET',
    uri : `https://www.goodreads.com/book/title.json`,
    qs : {
        key : 'Ku71LsVmpWUC3h740yX4kA',
        secret: 'VtDtdTt8w3IJ1qhKv2e6GTbs4ATGmtOJXBWkizB8'
        
    }
}

request(options).then( data => {
    console.log(data)
}).catch(err => console.log(err))