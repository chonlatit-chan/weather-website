const request = require('request')

const apiKey = '6ff277fc8944c7bff597fb0239636e6c'
const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + encodeURIComponent(apiKey) + '&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weatherstack service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                icon: body.current.weather_icons[0],
            })
        }
    })
}

module.exports = forecast