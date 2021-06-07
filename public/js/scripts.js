console.log('cli script')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(address)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = 'Try another search'
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.description + ', Temp: ' + data.forecast.temperature + 'C, Feels Like: ' + data.forecast.feelslike + 'C'
            }
        })
    })
})