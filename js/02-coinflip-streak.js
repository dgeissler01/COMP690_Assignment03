// Declare variable
let coinFlip

// DO WHILE LOOP WITH AND CONSOLE DISPLAY
do {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log(`Heads`)
    } else {console.log(`Tails`)}
} while (coinFlip === 0)