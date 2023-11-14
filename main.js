const variables = {
    fishingSpeed: 0,
    fishingVolume: 0,
    fishingQuality: 0,
    sellMult: 0,
    level: 1,
    xp: 0,
    xpReq: 100,
    cash: 0,
    timerMax: 3,
    timerCurrent: 3,
    Minnows: 0
}
const sellConversions = {
    Minnows: 1
}

const xpConversions = {
    Minnows: 1
}

function Update() {
    // Math

    // Interface
    document.getElementById('cashValue').innerHTML = variables.cash
    document.getElementById('levelValue').innerHTML = variables.level
    document.getElementById('currentXP').innerHTML = variables.xp
    document.getElementById('requiredXP').innerHTML = variables.xpReq
    document.getElementById('MinnowCount').innerHTML = variables.Minnows

    // Check for Level Up
    if (variables.xp >= variables.xpReq) {
        variables.xp = 0
        variables.level++
        variables.xpReq *= 1.3
    }
}

function Round(value) {
    value.toFixed(1)
}

// Functioning Buttons
function Fish() {
    variables.Minnows += 1
}

function Sell() {
    variables.cash += (variables.Minnows * sellConversions.Minnows)
    variables.xp += (variables.Minnows * xpConversions.Minnows)
    variables.Minnows = 0
}

setInterval(Update, 100)
