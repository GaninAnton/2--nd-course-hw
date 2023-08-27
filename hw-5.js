// Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

// function refund (a, b) {
//     if (a >= b) {
//         return (b);
//     } else {
//         return (a);
//     }

// }

// let answerOne = refund (8, 4);

// let answerTwo = refund (6, 6);

// console.log(answerOne, answerTwo);


// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

// function numbers (a) {
//     if (a % 2 === 0) {
//        return (`число четное`);
//     } else {
//         return (`число не четное`);
        
//     }
// }

// let answerOne = numbers(2);
// let answerTwo = numbers(4);
// let answerThree = numbers(3); 



// console.log(answerOne, answerTwo, answerThree);



// Задание 3


// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
// function numberSquared(a) {
//         console.log(a**2);
// }

// console.log(numberSquared (5));

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

// let numberSquared = function (a) {
//     return (a**2);
// } 
    
// console.log(numberSquared(22));


// Задание 4
// Создайте функцию, которая:

// Спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».
// *Подсказка: можете выполнить это задание с помощью оператора 
// if else


// const userAge = (number) => {
 
//     number = prompt('cколько тебе лет?')

//     if (number < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (number <= 12) {
//         console.log('Привет, друг!');
//     } else {
//         console.log('Добро пожаловать!');
//     }
// }

// userAge();

// Задание 5
// Напишите функцию, которая на вход принимает 2 числа:

// Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
// isNaN()
//  помогут.)
// Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то вернуть произведение данных чисел.

// function checkingNumber (a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         console.log('Одно или оба значения не являются числом');
//     } else {
//        console.log(`произведение равно ${a * b}`);
//     }
// }
// checkingNumber(9, 8)



// Задание 6
// Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
// 'n в кубе равняется <получившееся значение>'
// . Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.

// Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
// от 0 до 10
//  включительно.

// function checkingNumber() {

//     let num = prompt("напиши число а я возведу в куб");
//     if (!isNaN(num)) {
//         console.log(`${num} в кубе равняется ${num**3}`);
        
//     } else {
//         console.log('Переданный параметр не является числом');
//     }
// }
// checkingNumber();


// Задание 7
// Создайте объекты circle1 и circle2 со свойством 
// radius
// . У объектов должен быть методам 
// getArea
//  , которое возвращает площадь круга через радиус, а также 
// getPerimeter
//  , который возвращает периметр окружности.

// function getAreaCircle() {
//     return this.radius ** 2 * 3.14;
// }

// function getPerimeterCircle() {
//     return  2 * 3.14 * this.radius;
// }

// let circle1 = {
//     radius: 25,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle,
// };

// let circle2 = {
//     radius: 33,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle,
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());


// Задание 8. Работа с макетом
// Сверстайте второй блок сайта с играми. Ссылка на макет.
// Создайте его адаптивную версию и добавьте эффекты наведения.
// Свяжите ваш сайт с первой игрой.
// Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").

// Придумайте, как должна работать функция, если ей передать неправильный параметр.

// Выведите пример использования функции в консоль.

// Для решения задачи используйте конструкцию 
// else if
//  и логические операторы 
// ||
//  (логическое ИЛИ) и 
// &&
//  (логическое И).