/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.*/

// function math(num1, num2, num3){
//   let res = (num1 - num2)/num3;
//   console.log(res)
// }

// math(6, 2, 2)

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */

// function calc(number) {
//   // Вычисляем квадрат и куб числа
//   let square = number ** 2;
//   let cube = number ** 3;

//   // Возвращаем результат в виде объекта
//   return {
//     square: square,
//     cube: cube
//   };
// }

// // Вызываем функцию с числом 3
// let result = calc(4);

// // Выводим результат в консоль
// console.log("Квадрат:", result.square);
// console.log("Куб:", result.cube);


/* 3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b. */

// function min(a, b) {
//   return a < b ? a : b;
// }

// function max(a, b) {
//   return a > b ? a : b;
// }

// let minimum = min(2, 4);
// let maximum = max(2, 4);

// console.log(minimum);
// console.log(maximum);

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

// function generatearr(first, last) {
//   let arr = [];
//   for (let i = first; i <= last; i++) {
//     arr.push(i)
//   }
//   return arr;
// }

// function printArray(array) {
//   console.log(array);
// }

// let first = parseInt(prompt("Введите начальное значение:"));
// let last = parseInt(prompt("Введите конечное значение:"));

// let generatedarr = generatearr(first, last);
// printArray(generatedarr);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false. */

function isEven(num){
  return num % 2 === 0 ? true : false;
}
// let num = parseInt(prompt("Число четное?:"));
// console.log(isEven(num));


/* 6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи. */


function processArray(numbers) {
  let arr=[]
  for (let i = 0; i < numbers.length; i++) {
    if(isEven(numbers[i])){
      arr.push(numbers[i]);
    }
  }
  return arr
}
let myArray = [1, 2, 3, 4, 5, 7, 8, 10, 11];
let newarr = processArray(myArray);
console.log(newarr)

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:
Курс «JS».
*
**
***
****
*****
******
*******
********
********* */


function drawPyramid(rows, symbol = '') {
  for (let i = 1; i <= rows; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
      row += symbol
    }

    console.log(row);
  }
}

// Пример использования функции

drawPyramid(9, '*');  // Рисует пирамиду с символом '*'
drawPyramid(9, 'ч');  // Рисует пирамиду с заданным текстом


