const dicesSelected = document.querySelector('.dices-selected')
const diceSelector = document.querySelector('.dice-selector')
const dicesAppear = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')]
const button = document.querySelector('.button')
const diceTotalValueDisplay = document.querySelector('.dice-total-value')
let diceValue = 0
let totalDiceValue = 0
// Create all our dices on js to make them appear on our page
dicesAppear[0].classList.add('dice')
dicesSelected.appendChild(dicesAppear[0])

for(let i = 1; i<6; i++)
{
    dicesAppear[i].classList.add('dice')
    diceSelector.appendChild(dicesAppear[i])
}

// A fonction that change the dice state's to be able to chose how many dices wo want to play with 

function dicesSelecting()
{
    for(const dice of Array.from(dicesSelected.querySelectorAll('.dice')))
    {
        dice.addEventListener('click', (event) =>
        {
            diceSelector.appendChild(dice)
            dice.style.backgroundImage = `url('dice-states/dice-state-1.png')`
        })
    }
    for(const dice of Array.from(diceSelector.querySelectorAll('.dice')))
    {
        dice.addEventListener('click', (event) =>
        {
            dicesSelected.appendChild(dice)
            dice.style.backgroundImage = `url('dice-states/dice-state-1.png')`
        })
    }
}

// Animation function

function diceAnimation()
{
    for(key in Array.from(dicesSelected.querySelectorAll('.dice')))
    {
        Array.from(dicesSelected.querySelectorAll('.dice'))[key].style.backgroundImage = `url("dice-states/dice-state-${Math.floor(Math.random() * 7) + 1}.png")`
    }
}

// Random function that dertmine the dice number

function diceNumber()
{
    for(key in Array.from(dicesSelected.querySelectorAll('.dice')))
    {
        diceValue = Math.floor(Math.random() * 6) + 1
        totalDiceValue = totalDiceValue + diceValue
        Array.from(dicesSelected.querySelectorAll('.dice'))[key].style.backgroundImage = `url("dice-number/dice-${diceValue}.png")`
        console.log(totalDiceValue)
        diceTotalValueDisplay.textContent = totalDiceValue
        diceTotalValueDisplay.style.opacity = '0.8'
    }
}

// Calling function of dices states changes on click event 
window.addEventListener('click', dicesSelecting

)
button.addEventListener('click', () =>
{
    diceTotalValueDisplay.style.opacity = '0'
    totalDiceValue = 0
    for(let i = 0; i < 20; i++)
    {
        setTimeout(diceAnimation, parseInt(`${i}00`))
    }
    dicesSelecting()
    setTimeout(diceNumber, 2001)
})

// Dices rolls animations on mouse slid (bug on the total dice value )


// window.addEventListener('mousedown', (event) =>
// {
//     diceTotalValueDisplay.style.opacity = '0'
//     totalDiceValue = 0
//     startPositionX = event.x
//     startPositionY = event.y
//     window.addEventListener('mouseup', (event) =>
//     {

//         endPositionX = event.x
//         endPositionY = event.y

//         distanceX = Math.abs(startPositionX - endPositionX)
//         distanceY = Math.abs(startPositionY - endPositionY)

//         distance = Math.hypot(distanceX, distanceY)
//         if(distance > 500)
//         {
//             for(let i = 0; i < 20; i++)
//         {
//             setTimeout(diceAnimation, parseInt(`${i}00`))
//         }
//         dicesSelecting()
//         setTimeout(diceNumber, 2001)
//         }
//     })
// })

