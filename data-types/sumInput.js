
/*
 let styles = ['Джаз', 'Блюз', ];
 styles.push('Рок-н-ролл');
 styles[Math.floor((styles.length - 1)/2)] = 'Классика';
 styles.shift(0);
 styles.unshift('Рэп', 'Регги',);
 */

/**
   Напишите функцию sumInput(), которая:

   - Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
   - Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
   - Подсчитывает и возвращает сумму элементов массива.

   P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */
function sumInput() {

    function inputArray() {
        const arr = [];

        while (true) {
            const input = prompt('Введите значение: ');
            const number = +input;
            if (input == '' || input == null || Number.isNaN(number)) {
                break;
            }
            arr.push(number);
        };
        return arr;
    }

    function sumArray(arr) {
        let sum = 0;
         for (let item of arr) {
            sum += item;
        }
        return sum;
    }

    const arr = inputArray();
    return sumArray(arr);


}

alert(sumInput())

