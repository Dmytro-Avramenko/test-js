// Напиши скрипт вибору вартості готелю за кількістю зірок
// 1-20$, 2-30$; 3-50$; 4-70$; 5-120$
// якщо в змінній stars щсоь крім чисел 1-5, вивести сторічку 
// "такої кількості зірок немає"

// const stars = 8;           
// let prise

// if (stars === 1) {                if els це для більше менше 
//     prise = 20; 
// } else if (stars === 2){
//     prise = 30;
// } else if (stars === 3){
//     prise = 50;
// } else if (stars === 4){
//     prise = 70;
// } else if (stars === 5){
//     prise = 120;
// } else {
//     console.log("Такої кількості зірок немає")
// }

// console.log(prise); 

//////////////////////////////////////////// 

// теж саме тільки swith

// const stars = 1;
// let priсe

// switch(stars) {                    switch тільки для рівності         
//     case 1:
//         priсe = 20;
//         console.log("тут можна написати текст");
//         break;
//     case 2:
//         priсe = 30;
//         break;
//     case 3:
//         priсe = 50;
//         break;
//     case 4:
//         priсe = 70;
//         break;
//     case 5:
//         priсe = 120;
//         break;

//     default:
//         console.log("Такої кількості зірок немає");    
// }

// console.log(priсe);

/////////////////////////////////////////////
// коли кілька кецсів з одним значеням
// Напиши скрипт вибору вартості готелю за кількістю зірок
// 1,2-20$, 3,4-30$; 5-120$
// якщо в змінній stars щсоь крім чисел 1-5, вивести сторічку 
// "такої кількості зірок немає"

// const stars = 1;
// let priсe

// switch(stars) {
//     case 1:
//     case 2:
//         priсe = 20;
//         console.log("тут можна написати текст");
//         break;

//     case 3:
//     case 4:
//         priсe = 30;
//         break;    
        
//     case 5:
//         priсe = 120;
//         break;

//     default:
//         console.log("Такої кількості зірок немає");    
// }

// console.log(priсe);

// Напиши скрип вибору доставки товару 
// Опція зберігєтсья в пермінній option: 1 - самовивіз, 2 - курєр, 3 почта;
// в перемінну message записати повідомлення в залежності від опції 
// - ви можете завбрати товар завтра;
// - Курєр доставить замовлення з 9:00 до 18:00
// - ПКурєр доставить замовлення з 9:00 до 18:00
// - Вам передзвонить менеджер 

// 1. логіка сторитти переменні
// const option = 2;
// let message = "";

// // 2. сторити switch 1, 2, 3.
// switch (option) {
//     case 1:
//         message = "ви можете завбрати товар завтра";
//         break;

//     case 2:
//         message = "Курєр доставить замовлення з 9:00 до 18:00";
//         break;    
        
//     case 3:
//         message = "Курєр доставить замовлення з 9:00 до 18:00";
//         break;

//     default:
//         message = "Вам передзвонить менеджер";    
// }

// // 3. в кожному кейсі запистаи message стрічку
// // 4. сторити лог message

// console.log(message);








