const testSudoku = [
  [0, 0, 3, 0, 0, 8, 2, 0, 4],
  [0, 2, 0, 0, 6, 4, 0, 1, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 9, 8, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 4, 9, 0, 7, 0, 3, 0],
  [8, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 7, 0, 0, 5, 0, 4, 0, 0],
];

// функция которая смотрит направо

function findEmty(arr) {
  const newArr = arr.map((el) => el.join(' '));
  newArr = newArr.forEach();

  console.log(newArr);
}
findEmty(testSudoku);
