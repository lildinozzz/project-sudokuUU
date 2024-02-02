const sudoku = require('../sudoku.js')
const {
    read, getCell, checkRow, checkCol, checkSquare,
  } = require('./sudoku');

describe ('Судоку рабочий'(), => {
    let grid;
    beforeEach(() => {

      grid = read()
})