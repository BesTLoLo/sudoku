import * as examples from './examples.js';
import Sudoku from './sudoku.js';

const clearButton = document.getElementById('clear')
const importButton = document.getElementById('import')
const importString = document.getElementById('importString').value
const solveButton = document.getElementById('solve')
const myTable = document.getElementById('myTable')

const squaresBoard = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
]








let game1 = new Sudoku()



clearButton.addEventListener('click', () => {
    for (const row of myTable.rows) {
        for (const cell of row.cells) {
            cell.childNodes[0].classList.remove('imported_square')
            cell.childNodes[0].value = ''
        }
    }
    game1 = new Sudoku()
})

importButton.addEventListener('click', () => {
    game1.fillBoard(importString)
})

game1.board = examples.veryEasyGameArr()

console.log(game1.board)