const request = require('postman-request')

// GeoCoding = Address->Lat/Lon->Weather Info.
const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=76b7fa6383af0d18b5767eaac9c066e2&query=' + encodeURIComponent(address) + '&limit=1'

    request({url: url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Error! Check your input url!', undefined)
        }
        else{
            callback(undefined, {
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude,
                location : body.data[0].name
                })
        }
    })
}

module.exports = geocode