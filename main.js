const variables = {
    fishingSpeedLevel: 1,
    fishingVolumeLevel: 1,
    fishingRod: "Starter Rod",
    sellMult: 1,
    level: 1,
    xp: 0,
    xpReq: 100,
    cash: 0,
    timerMax: 3,
    timerCurrent: 3,
    Minnows: 0,
    Shrimp: 0
}
const sellConversions = {
    Minnows: 1,
    Shrimp: 5
}

const xpConversions = {
    Minnows: 1,
    Shrimp: 3
}

const starterRodMultipliers = {
    Minnows: 0.9,
    Shrimp: 0.1
}

function Update() {
    // Math

    // Interface
    document.getElementById('cashValue').innerHTML = variables.cash
    document.getElementById('levelValue').innerHTML = variables.level
    document.getElementById('currentXP').innerHTML = variables.xp
    document.getElementById('requiredXP').innerHTML = variables.xpReq
    document.getElementById('sellMultiplier').innerHTML = variables.sellMult

    // Backpack
    document.getElementById('MinnowCount').innerHTML = variables.Minnows
    document.getElementById('ShrimpCount').innerHTML = variables.Shrimp

    // Check for Level Up
    if (variables.xp >= variables.xpReq) {
        variables.xp = 0
        variables.level++
        variables.xpReq = Math.round(100 * Math.pow(1.3, variables.level - 1))
    }
}

// Functioning Buttons
function Fish() {
    var randomVal = Math.random();
    if (randomVal < starterRodMultipliers.Minnows) {
        variables.Minnows += 1
    }
    else {
        variables.Shrimp += 1
    }
}

function Sell() {
    variables.cash += variables.sellMult * (variables.Minnows * sellConversions.Minnows)
    variables.xp += (variables.Minnows * xpConversions.Minnows)
    variables.Minnows = 0
    variables.Shrimp = 0
}

setInterval(Update, 100)
