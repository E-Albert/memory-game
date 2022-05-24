const cardArray = [
    {
        name: 'basketball',
        img: 'img/memorygamebasketball.jpeg'
    },
    {
        name: 'baseball',
        img: 'img/memorygamebaseball.jpeg'
    },
    {
        name: 'football',
        img: 'img/memorygamefootball.png'
    },
    {
        name: 'hockeypuck',
        img: 'img/memorygamehockeypuck.jpeg'
    },
    {
        name: 'soccerball',
        img: 'img/memorygamesoccerball.jpeg'
    },
    {
        name: 'tennisball',
        img: 'img/memorygametennisball.jpeg'
    },
    {
        name: 'basketball',
        img: 'img/memorygamebasketball.jpeg'
    },
    {
        name: 'baseball',
        img: 'img/memorygamebaseball.jpeg'
    },
    {
        name: 'football',
        img: 'img/memorygamefootball.png'
    },
    {
        name: 'hockeypuck',
        img: 'img/memorygamehockeypuck.jpeg'
    },
    {
        name: 'soccerball',
        img: 'img/memorygamesoccerball.jpeg'
    },
    {
        name: 'tennisball',
        img: 'img/memorygametennisball.jpeg'
    }
    
]

//shuffling the array
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/memorygamequestionmark.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

     
    }
}

createBoard(); 

function checkMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/memorygamequestionmark.png')
        cards[optionTwoId].setAttribute('src', 'img/memorygamequestionmark.png')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'img/memorygamesolidgray.png')
        cards[optionTwoId].setAttribute('src', 'img/memorygamesolidgray.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'img/memorygamequestionmark.png')
        cards[optionTwoId].setAttribute('src', 'img/memorygamequestionmark.png')
        alert('Sorry! Try again.')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []


    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}