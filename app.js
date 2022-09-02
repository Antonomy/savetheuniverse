class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack() {
        if (Math.random() <= attacker.accuracy) {
            defender.hull = defender.hull - attacker.firepower
            render()
            console.log("Hit! - " + attacker.name + " hit " + defender.name + " for " + attacker.firepower + " hull points!")
            checkWinOrLose()
        } else {
            console.log("Miss! - " + attacker.name + " missed " + defender.name)
        }
        //Swap attacker and defender
        attacker === playerShip ? attacker = alienShips[0] : attacker = playerShip
        defender === playerShip ? defender = alienShips[0] : defender = playerShip
        console.log("It is " + attacker.name + "'s turn.")
    }

}

const playerShip = new Ship('USS Schwarzenegger', 2000, 5, .7)
const alienShips = [
    new Ship('Alien Ship 1', 3, 2, .6),
    new Ship('Alien Ship 2', 3.5, 2.5, .65),
    new Ship('Alien Ship 3', 4, 3, .7),
    new Ship('Alien Ship 4', 5, 3.5, .75),
    new Ship('Alien Ship 5', 5.5, 3.75, 7.75),
    new Ship('Alien Ship 6', 6, 4, .8)
]

let attacker = playerShip
let defender = alienShips[0]

function checkWinOrLose() {
    if (playerShip.hull <= 0) {
        console.log("You Lose!")
    } else if (alienShips[0].hull <= 0) {
        console.log("You defeated " + alienShips[0].name)
        alienShips.shift()
        if (alienShips[0]) {
            console.log("A new alien ship has arrived: " + alienShips[0].name)
        } else {
            document.getElementById('gameStatus').textContent = "Status: You win!"
            document.getElementById('attack').remove()
            document.getElementById('defend').remove()
            document.getElementById('retreat').remove()
        }
    }
}

document.getElementById('attack').addEventListener('click', (evt) => {
    attacker.attack()
})

document.getElementById('defend').addEventListener('click', (evt) => {
    attacker.attack()
})

document.getElementById('retreat').addEventListener('click', (evt) => {
    document.getElementById('gameStatus').textContent = "Status: You gave up by retreating - you lose!"
})

render()

function render() {
    document.getElementById('playerShipName').textContent = "Name: " + playerShip.name
    document.getElementById('alienShipName').textContent = "Name: " + alienShips[0].name
    document.getElementById('playerHP').textContent = "Hull: " + playerShip.hull
    document.getElementById('alienHP').textContent = "Hull: " + alienShips[0].hull
}