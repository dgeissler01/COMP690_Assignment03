// Declare variable
let x

// PROMPT USER FOR FLIP VALUE
x = prompt("Choose a number and we will count down to 0 from it.")
console.log(`User entered: ${x}.`)

// VERIFY PROMPT IS NOT NULL, <1, OR NAN
while (x < 1 || x === null || isNaN(x) === true) {
    alert(`Enter a NUMBER greater than 0`)
    x = prompt("Choose a number and we will count down to 0 from it.")
    console.log(`User entered: ${x}.`)
}

for (let i = 0; i <= x; i++) {
    console.log(x)
    x = x - 1
}