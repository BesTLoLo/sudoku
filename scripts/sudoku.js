
export default  class Sudoku {
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
}