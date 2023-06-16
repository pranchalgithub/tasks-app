const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5866985ca07ba5534fbed92e50884621&query=' + latitude + ',' + longitude + '&unit=f'

    request({url: url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather data!', undefined)
        }
        else if(body.error){
            callback('Unable to fetch data! Check your input url', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions + ". It is currently " + body.current.temperature + " degrees and it feels like " + body.current.feelslike + " degrees." + "There's a " + + body.current.precip + " precipitation." )
        }
    })

}

module.exports = forecast