// Используйте для решения судоку необходимые функции из файла sudoku.js

const {
  read, getCell, checkRow, checkCol, checkSquare,
} = require('./sudoku');

const boardSudoku = read(3);

function runner(board) {
  const coord = getCell();
  if (!coord) { return true; }
  const [row, col] = coord;
  for (let i = 1; i <= 9; i++) {
    console.log(i, coord);
    if (checkRow(board, row, i) && checkCol(board, col, i) && checkSquare(board, coord, i)) {
      board[row][col] = i;
      if (runner(board)) {
        console.table(board)
        return true;
      }
      board[row][col] = '-';
    }
  }
  return false;
}
runner(boardSudoku);
console.table(boardSudoku);
