/**
 * Keeps track of the arithmetic total when the arithmetic is done.
 */
let runningTotal = 0

let buffer = "0"
let previousOperator

const screen = document.querySelector('.screen') 

/**
 * This function is triggered when a button is clicked, processing the button's value accordingly. 
 * If the value is not a number (NaN), it treats the value as a symbol and calls handleSymbol with the value as an argument.
 * If the value is a number, it calls handleNumber with the value as an argument. 
 * After processing the value, it updates the screen's text content with the current valueof the buffer.
 * @param {number | string} value - The value of the button clicked.   
 */

const buttonClick = (value) => {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer
}

/**
 *The function handleSymbol processes the symbol input from a button click, performing various operations based on the symbol type.
 * If the symbol is 'C', it resets the buffer to '0' and the runningTotal to 0, effectively clearing any existing data.
 * If the symbol is '=', it checks if there is a previous 
 * 
 * 
 * @param {string} symbol - The symbol input from a button click 
 * 
 */

const handleSymbol = (symbol) => {
    switch(symbol) {
        case 'C':
            buffer = '0'
            runningTotal = 0
            break
        case '=':
            if (previousOperator === null) {
                return 
                }
                flushOperation(parseInt(buffer))
                previousOperator = null
                buffer = runningTotal
                runningTotal = 0
                break
        case '←':
            if(buffer.length === 1) {
                buffer = '0'
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break
            case '+':
            case '-':
            case '×':
            case '÷':
                handleMath(symbol)
                break    
    }
}

/**
 *Takes in the argument numberString and adds it to zero if it is already not '0'
 * @param {string} numberString 
 */

 const handleNumber = (numberString) => {
    if (buffer === '0') {
        buffer = numberString
    } else {
        buffer += numberString
    }
 }

 /** 
 * Takes in the argument symbol and turns it into a number  
 * @param {string} symbol - the string that gets parsed in when clicked.  
 * @returns number
 */

const handleMath =(symbol) => {
    if (buffer === '0') {
        return
    }

    const intBuffer = parseInt(buffer)

    if(runningTotal === 0) {
        runningTotal = intBuffer
    } else {
        flushOperation(intBuffer)
    }
    previousOperator = symbol
    buffer = '0'
}

/**The function is part of the handleMath function and handle the arithmetic  
 * @param {number} intBuffer - A number that gets parsed in when clicked
 */

const flushOperation = (intBuffer) => {
    if(previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer 
    }       
}

/**
 * The function listens to when the buttons are clicked and performs the necessary operations according to the functions.    
 */

const init = () => {
    document.querySelector('.calc-buttons').addEventListener('click', (event) => {
        buttonClick(event.target.innerText)
    })
}

init()