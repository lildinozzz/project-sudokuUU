
const { log } = require('console');
const fs = require('fs');
let arg =  process.argv[2]
function read(arg) {
  const arrName = fs.readFileSync("./puzzles.txt", "utf-8")
  const splitNem = arrName.trim().split('\n').map((el) => el.split(''))
  // console.log(splitNem);
  const resultArr =[]
  const str = splitNem[arg]
  const str1 = str.slice(0, 9)
  const str2 = str.slice(9, 18)
  const str3 = str.slice(18, 27)
  const str4 = str.slice(27, 36)
  const str5 = str.slice(36, 45)
  const str6 = str.slice(45, 54)
  const str7 = str.slice(54, 63)
  const str8 = str.slice(63, 72)
  const str9 = str.slice(72, 81)
  resultArr.push(str1, str2, str3, str4, str5, str6, str7, str8, str9)
  return resultArr
}
console.table(read(arg));

// console.log(proscessArgv(node sudoku.js read));
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
