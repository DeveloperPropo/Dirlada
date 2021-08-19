document.addEventListener('DOMContentLoaded',()=>{
    const cardArray = [
        {
            ime: 'micko3',
            img: 'src/img/micko3-100.png'
        },
        {
            ime: 'grujo2',
            img: 'src/img/grujo2-100.png'
        },
        {
            ime: 'grujo3',
            img: 'src/img/grujo3-100.png'
        },
        {
            ime: 'zmic1',
            img: 'src/img/zmic1-100.png'
        },
        {
            ime: 'grujo5',
            img: 'src/img/grujo5-100.png'
        },
        {
            ime: 'micko1',
            img: 'src/img/mic-100.png'
        },
        {
            ime: 'micko3',
            img: 'src/img/micko3-100.png'
        },
        {
            ime: 'grujo2',
            img: 'src/img/grujo2-100.png'
        },
        {
            ime: 'grujo3',
            img: 'src/img/grujo3-100.png'
        },
        {
            ime: 'zmic1',
            img: 'src/img/zmic1-100.png'
        },
        {
            ime: 'grujo5',
            img: 'src/img/grujo5-100.png'
        },
        {
            ime: 'micko1',
            img: 'src/img/mic-100.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random()) //sortiranje
    console.log(cardArray)

    const grid = document.querySelector('.grid') //selektiranje .grid css selektor
    const resultDisplay = document.querySelector('#rezultat')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img') // kreiranje na img element
            card.setAttribute('src', 'src/img/door1.png')
            card.setAttribute('data-id', i) // data-id davanje
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].ime)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'src/img/door1.png')
            cards[optionTwoId].setAttribute('src', 'src/img/door1.png')
            alert("Ја кликна истата слика")
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Браос, погоди две слики')
            cards[optionOneId].setAttribute('src', 'src/img/white.png')
            cards[optionTwoId].setAttribute('src', 'src/img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'src/img/door1.png')
            cards[optionTwoId].setAttribute('src', 'src/img/door1.png')
            alert("Љуф-Цуф")   
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Честито, ја заврши играта!"
        }
        //console.log(cardsChosenId)
        //console.log(cardsWon)
    }
    createBoard()

})