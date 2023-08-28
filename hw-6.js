// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

// После вывода значения 10 в консоль цикл должен прекратить свою работу.


// let numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] == 10) {
//     console.log(numbers[i]);
//     break;
//     } else
// 	console.log(numbers[i]);
    
// }


// Задание 2
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Найдите позицию (индекс) числа 4 в этом массиве.

// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.


// let numbers = [1, 5, 4, 10, 0, 3];

//     console.log(numbers.indexOf(4));
    


// Задание 3
// Дан массив чисел: 
// [1, 3, 5, 10, 20]
// С помощью метода 
// join
//  выведите элементы массива через пробел (пустую строку ' ').

// const numbers = [1, 3, 5, 10, 20];
// console.log(numbers.join(' '));



// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].


// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(1);
// 	}
// }

// console.log(arr);



// Задание 5
// Дан массив: 
// [1, 1, 1] Добавьте в конец массива значения 2, 2, 2.

// let arr = [1, 1, 1];

// for (let i = 0; i < 3; i++) {
//     arr.push(2);
    
// }
// console.log(arr);


// Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5] . С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.

// let arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);


// Задание 7
// Дан массив: 
// [9, 8, 7, 6, 5]
// .

// Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».


// let arr = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt(`угадай число..`));
// if (arr.includes(userNumber)) {
//     console.log(`угадал`);
// } else {
//     console.log(`не угадал`);
// }

// Задание 8 Дана строка:  'abcdef' Необходимо, чтобы программа вывела в консоль  'fedcba' .


// let line = 'abcdef';
// let arr = Array.from(line);
// arr.reverse();
// let lineTwo = arr.join(``);

// console.log(lineTwo);



// Задание 9
// Дан массив: 
// [[1, 2, 3,],[4, 5, 6]]
// .

// Выведите в консоль массив вида: 
// [1, 2, 3, 4, 5, 6]
// .

// let arr = [[1, 2, 3,],[4, 5, 6]];

// let arrIn = arr.flat();

// console.log(arrIn);


// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла 
// for
//  и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

// Следующий элемент массива можно получить с помощью индекса: 
// i + 1
// . Обратите внимание, что у последнего элемента нет следующего.

// let arr = [1, 5, 6 , 7, 8, 3];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == 3) {
//         console.log(`конец`);
//         break

//     } else {
//         let arrIn= arr[i] + arr[i + 1];
//         console.log(arrIn);    
//     }
// }

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = arr.map(function (i) {
//   return i ** 2
// })

// console.log(square)

// Подсказка
// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

// Пример вызова:

// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]


// const arr = [`нога`, 'голова', 'трансформатор', 'сыр'];

// const words = arr.map(function (i) {
//       return i.length
//     })
    
//     console.log(words)




// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// function filterPositive(array) {
//   // Допишите код функции
// }

// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

// let filterPositive = [-25, 25, 0, -1000, -2];

//  let negativeNumbers =filterPositive.filter(function (i) {
//     return i < 0;
//  })

// console.log(negativeNumbers);
