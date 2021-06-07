const request = require('request')

const apiKey = 'pk.eyJ1IjoibWF5anVuZyIsImEiOiJja3A1NTMwaXAwMzk0MzJwZzBhM3lhN3o0In0.AWE7vWaNMEc8usrRleL9ig'
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + encodeURIComponent(apiKey) + '&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect mapbox service')
        } else if (body.features.length === 0) {
            callback('Unable to matching address')
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode