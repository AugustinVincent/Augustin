const playingDices = document.querySelector('.playing-dices')
const diceSelector = document.querySelector('.dice-selector')
const dicesAppear = []
const button = document.querySelector('.button')
const diceTotalValueDisplay = document.querySelector('.dice-total-value')
const instructions = document.querySelector('.instructions')
let diceValue = 0
let totalDiceValue = 0

// Create all our dices on js to make them appear on our page
for(let i = 0; i<6; i++)
{
    dicesAppear.push(document.createElement('div'))
    dicesAppear[i].classList.add('dice')
    diceSelector.appendChild(dicesAppear[i])
}
playingDices.appendChild(dicesAppear[0])



// A fonction that change the dice state's to be able to chose how many dices wo want to play with 

function dicesSelecting()
{
    for(const dice of Array.from(playingDices.querySelectorAll('.dice')))
    {
        dice.addEventListener('click', (event) =>
        {
            diceSelector.appendChild(dice)
            dice.style.backgroundImage = `url('../images/dice-states/dice-state-1.png')`
        })
    }
    for(const dice of Array.from(diceSelector.querySelectorAll('.dice')))
    {
        dice.addEventListener('click', (event) =>
        {
            playingDices.appendChild(dice)
            dice.style.backgroundImage = `url('../images/dice-states/dice-state-1.png')`
        })
    }
}


// Animation function

function diceAnimation()
{
    for(key in Array.from(playingDices.querySelectorAll('.dice')))
    {
        
        Array.from(playingDices.querySelectorAll('.dice'))[key].style.backgroundImage = `url("../images/dice-states/dice-state-${Math.floor(Math.random() * 7) + 1}.png")`
    }
}


// Random function that dertmine the dice number

function diceNumber()
{
    for(key in Array.from(playingDices.querySelectorAll('.dice')))
    {
        diceValue = Math.floor(Math.random() * 6) + 1
        totalDiceValue = totalDiceValue + diceValue
        Array.from(playingDices.querySelectorAll('.dice'))[key].style.backgroundImage = `url("../images/dice-number/dice-${diceValue}.png")` 
        diceTotalValueDisplay.textContent = totalDiceValue
        diceTotalValueDisplay.style.opacity = '0.8'
    }
}


// Calling function of dices states changes on click event 

window.addEventListener('click', dicesSelecting)
button.addEventListener('click', () =>
{
    diceTotalValueDisplay.style.opacity = '0'
    totalDiceValue = 0
    for(let i = 5; i < 25; i++)
    {
        setTimeout(diceAnimation, i * 100)
    }
    dicesSelecting()
    setTimeout(diceNumber, 2501)
})

function instructionsAnimation()
{
    if(instructions.style.opacity == '1')
    {
        instructions.style.opacity = '0.3'
    }
    else
    {
        instructions.style.opacity = '1'
    }
}

setInterval(instructionsAnimation,700)



// 

//  MENU

// 



// Menu var
const menu = document.querySelector('.menu')
const gameSelector = document.querySelector('.game-selector')
const possibleGames = Array.from(gameSelector.querySelectorAll('.game'))
const backgroundMenu = document.querySelector('.background-menu')
const gameChoice = Array.from(gameSelector.querySelectorAll('.game'))




menu.addEventListener('click', () => 
{
    menu.style.display = 'none'
    gameSelector.style.display = 'flex'
    backgroundMenu.style.display = 'flex'
    document.querySelector('.game-title').style.zIndex = '0'
})

//  Make the menu disappear when we click somewhere else of the emnu
backgroundMenu.addEventListener('click', () =>
{
    
    menu.style.display = 'flex'
    gameSelector.style.display = 'none'
    backgroundMenu.style.display = 'none'
    document.querySelector('.game-title').style.zIndex = '1'
        
})
