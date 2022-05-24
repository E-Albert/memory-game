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
        img: 'img/memorygamefootball.jpeg'
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
        img: 'img/memorygamefootball.jpeg'
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

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/memorygamequestionmark.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
        console.log(card, i)
    }
}

createBoard(); 