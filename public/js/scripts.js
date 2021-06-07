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
const icon = document.querySelector('#icon')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    fetch('/weather?address=' + encodeURIComponent(address)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = 'Try another search'
                icon.textContent = ''
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.description + ', Temp: ' + data.forecast.temperature + 'C, Feels Like: ' + data.forecast.feelslike + 'C'

                const img = document.createElement('img')
                img.src = data.forecast.icon
                icon.appendChild(img)
            }
        })
    })
})