const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const radioCeiling = document.querySelector('input[name="ceiling"]');
const radioWalls = document.querySelector('input[name="walls"]');
const radioFloor = document.querySelector('input[name="floor"]');
let totalPriceEl = document.querySelector('#total-price');

const formatter = new Intl.NumberFormat('ru');
totalPriceEl.innerText = formatter.format(390000)  
 
const basePrice = 6000;

squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value
})

squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
})

function calculate () {
    totalPrice = basePrice * parseInt(squareInput.value)

    for (const radio of radioType) {
            if (radio.checked) {
                totalPrice = totalPrice * parseFloat(radio.value)
            } 
    }

    for (const building of radioBuilding) {
            if (building.checked) {
                totalPrice = totalPrice * parseFloat(building.value)
            } 
}

    for (const rooms of radioRooms) {
            if (rooms.checked) {
                totalPrice = totalPrice * parseFloat(rooms.value)
            } 
}

    if (radioCeiling.checked) {
        totalPrice = totalPrice * parseFloat(radioCeiling.value)
    }

    if (radioWalls.checked) {
        totalPrice = totalPrice * parseFloat(radioWalls.value)
    }

    if (radioFloor.checked) {
        totalPrice = totalPrice * parseFloat(radioFloor.value)
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceEl.innerText = formatter.format(totalPrice.toFixed(0))    
}

for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate()
    })
}


