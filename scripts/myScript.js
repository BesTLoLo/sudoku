import * as examples from './examples.js';
import Sudoku from './sudoku.js';

const clearButton = document.getElementById('clear')
const importButton = document.getElementById('import')
const importString = document.getElementById('importString').value
const solveButton = document.getElementById('solve')
const myTable = document.getElementById('myTable')



let game = new Sudoku()


clearButton.addEventListener('click', () => {
    for (const row of myTable.rows) {
        for (const cell of row.cells) {
            cell.childNodes[0].classList.remove('imported_square')
            cell.childNodes[0].value = ''
        }
    }
    game = new Sudoku()
})

importButton.addEventListener('click', () => {
    game.fillBoard(importString)
})

//game.board = examples.veryEasyGameArr()

solveButton.addEventListener('click', ()=>{
    game.solve()
})