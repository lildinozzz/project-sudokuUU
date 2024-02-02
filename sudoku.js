const { log, table } = require('console');
const fs = require('fs');

const arg = process.argv[2] ? process.argv[2] : 0;
function read(arg) {
  const arrName = fs.readFileSync('./puzzles.txt', 'utf-8');
  const splitNem = arrName.trim().split('\n').map((el) => el.split(''));
  const resultArr = [];
  const str = splitNem[arg];
  const str1 = str.slice(0, 9);
  const str2 = str.slice(9, 18);
  const str3 = str.slice(18, 27);
  const str4 = str.slice(27, 36);
  const str5 = str.slice(36, 45);
  const str6 = str.slice(45, 54);
  const str7 = str.slice(54, 63);
  const str8 = str.slice(63, 72);
  const str9 = str.slice(72, 81);
  resultArr.push(str1, str2, str3, str4, str5, str6, str7, str8, str9);
  return resultArr;
}

function getCell() {
  const board = read(arg);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return false;
}

function checkRow(board, row, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == num) {
      return false;
    }
  }
  return true;
}

function checkCol(board, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == num) {
      return false;
    }
  }
  return true;
}

function checkSquare(board, coord, num) {
  const [row, col] = coord;
  const rowSquare = Math.floor(row / 3) * 3;
  const colSquare = Math.floor(col / 3) * 3;
  for (let i = rowSquare; i < rowSquare + 3; i++) {
    for (let j = colSquare; j < colSquare + 3; j++) {
      if (board[i][j] == num) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  read, getCell, checkRow, checkCol, checkSquare,
};
