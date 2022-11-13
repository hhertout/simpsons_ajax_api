const quoteContainer = document.getElementById('quote')
const characterContainer = document.getElementById('character')
const charImage = document.getElementById('charImage')
const changeQuote = document.getElementById('changeQuote')

const fetchSimpsons = () => {
    let num = Math.random()*100
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count={num}`
    axios.get(url)
        .then(response => {
            return response.data
        })
        .then(quote => {
            quoteContainer.innerText = quote[0].quote 
            characterContainer.innerText = quote[0].character;
            charImage.src = quote[0].image
        })
}

window.addEventListener('load', () => {
    fetchSimpsons()
})
changeQuote.addEventListener('click', () => {
    fetchSimpsons()
})
