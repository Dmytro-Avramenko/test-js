// Цикл for

// for (ініціалазція; умова; пост - вираз) {
//     // тіло цикла
// }
// ініціалізації - постакове значення, в циклі зазвичай 0, 1 тощо/
// чому let бо воно буде збільшуватись на пене значення
// умова це по суті довжина циклу. вона зазвичай більше або менше певного числа
// пост-вираз тут ми змінюємо цикл додаємо чи віднімаємо i = i + 1 теж саме що i += 1

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// console.log("тут можна закінчити в кінці");

// ===================================================================

// pre-increment і post-increment  ЗЛО некористуватись

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

// ===================================================================
// Напиш скрипт який підрахує загальну сумму зарплати працівників
// кілкьітсь працівників зберігаєтсья в перемінні employees
// Зарплата кожного працівника це випадкова цифра від 500 до 5000
// записати сумму в перемінну totalSalary і виввести в консоль

// 1. Зробити var  НЕДОРОЛЕНА ЗАДАЧА
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;

// // 2. Перебрати праціваників в циклі
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary);
//     // console.log('зарплат а ${i} - ${}' ) тут нерахує
// }


// 3. Згенерувати працівнику випадкову зарпплату

// 4. дадати до totalSalary

// 5. висести в log


//===============================================================
// напиши скрипт який підраховує суму всіх парних і непарнизз чисел,
// які входять в діапазон чисел від min до max. Наприклад min=0 і max=5 то діапазон 0-5
// і в ньому два парних числа 2-4, і їх сумма 6.

// 1. переменні 
const min = 6;
const max = 17;
let total = 0;

// 2. фор від мін до макс з кроком в 1
// console.log(11 % 2) 
for (let i = min; i <= max; i += 1) { 
    console.log(i);

    if (i % 2 === 0) {
        console.log("парне:", i);

        total = total + i;
    }
}

// 3. превіряємо залишок від ділення

// 4. пишемо суму
console.log("total:", total)


