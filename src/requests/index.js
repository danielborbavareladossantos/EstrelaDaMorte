const request = require('request');

var getPeople = () => {
    return new Promise((resolve,reject) => {
        request({
            headers: {
              'Content-Type': 'application/json'
            },
            uri: 'https://swapi.co/api/people/',
            method: 'GET'
          }, (err, res, body) => {
            resolve(body)
          })
    })
}

module.exports = {
    getPeople:getPeople
}