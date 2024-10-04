// Declare variable
let coinFlip
let x

// PROMPT USER FOR FLIP VALUE
x = prompt("Enter the amount of times you would like the coin to flip.")
console.log(`User entered: ${x}.`)

// VERIFY PROMPT IS NOT NULL, <1, OR NAN
while (x < 1 || x === null || isNaN(x) === true) {
    alert(`Enter a NUMBER greater than 0`)
    x = prompt("Enter the amount of times you would like the coin to flip.")
    console.log(`User entered: ${x}.`)
}


// FOR LOOP
for (let i = 1; i <= x; i++) {
    coinFlip = Math.round(Math.random())
    console.log(`Random Math Number is ${coinFlip}.`)
}

// DISPLAY HEADS OR TAILS TO CONSOLE
if (coinFlip === 0) {
    console.log(`Heads`)
} else {
    console.log(`Tails`)
}