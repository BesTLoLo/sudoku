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


export default class Sudoku {
    constructor() {
        this.board = this.setEmptyBoard()
    }

    setEmptyBoard() {
        return [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    getRow(row) {
        return this.board[row]
    }

    squaresBoard() {
        return [
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
    }

    getColumn(col) {
        let column = []
        for (let row = 0; row < 9; row++) {
            column.push(this.board[row][col])
        }
        return column
    }

    getSquareCells(square) {
        let cells = []
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (squaresBoard[row][col] === square) {
                    cells.push(this.board[row][col])
                }
            }
        }
        return cells;
    }

    fillBoard(input) {
        for (let row = 0; row <= 8; row++) {
            for (let col = 0; col <= 8; col++) {
                let value = parseInt(input.charAt(row * 9 + col))
                this.board[row][col] = value
                if (value !== 0) {
                    myTable.rows[row].cells[col].children[0].value = value
                }

            }
        }
    }

    completeCell(row, col) {
        const usedValues = [...this.getRow(row), ...this.getColumn(col), ...this.getSquareCells(squaresBoard[row][col])]
        let possibilities = []
        for (let v = 1; v <= 9; v++) {
            if (!usedValues.includes(v)) {
                possibilities.push(v)
            }
        }
        if (possibilities.length == 1) {
            this.board[row][col] = possibilities[0]
            return true
        } else {
            this.board[row][col] = possibilities
            return false
        }
    }

    doesAppearOnce(possibilities, range, row, col) {
        let res = false
        for (let i = 0; i < possibilities.length; i++) {
            let option = possibilities[i]
            let counter = 0
            range.forEach(cell => {
                if (Array.isArray(cell)) {
                    if (cell.includes(option)) {
                        counter++
                    }
                } else if (cell == option) {
                    counter++
                }
            })
            if (counter == 1) {
                this.board[row][col] = option
                res = true
            }
        }
        return res
    }

    solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    this.completeCell(row, col)
                }
            }
        }
        console.log(this.board)
    }

}