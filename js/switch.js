'use strict';

// *****************Время года******************
let num = Number(prompt("Введите любое число времени года"));
let result;

while(num > 4 || num < 1 || isNaN(num)) { 
    alert("Указано недопустимое значение");
    num = Number(prompt("Введите любое число времени года"));
}

switch(num) {
    case 1:
        result = "Зима";
        break;    
    case 2:
        result = "Весна";
        break;
    case 3: 
        result = "Лето";
        break;
    case 4:
        result = "Осень";
        break;
    default:
        result = undefined;
        break;
}

alert(result);

// **********************Месяц времени года***************************
let month = Number(prompt("Введите любое число месяца"));

while(month > 12 || month < 1 || isNaN(month)) {
    alert("Указано недопустимое значение");
    month = Number(prompt("Введите любое число месяца"));
}

switch(month) {
    case 12:
    case 1:
    case 2:
        result = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        result = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        result = "Лето";
        break;
    case 9:
    case 10:
    case 11:
        result = "Осень";
        break;
    default:
        result = undefined;
        break;
}

alert(result);

// ************************День недели*************************
let dayOfWeek = Number(prompt("Введите любой день недели"));

while(dayOfWeek > 7 || dayOfWeek < 1 || isNaN(dayOfWeek)) { 
    alert("Указано недопустимое значение");
    dayOfWeek = Number(prompt("Введите любой день недели"));
}

switch(dayOfWeek) {
    case 1:
        result = "Понедельник";
        break;    
    case 2:
        result = "Вторник";
        break;
    case 3: 
        result = "Среда";
        break;
    case 4:
        result = "Четверг";
        break;
    case 5:
        result = "Пятница";
        break;
    case 6: 
        result = "Суббота";
        break;
    case 7:
        result = "Воскресенье";
        break;
    default:
        result = undefined;
        break;
}

alert(result);

// ************************День месяца*************************
let day = Number(prompt("Введите любой день месяца"));

while(day > 31 || day < 1 || isNaN(day)) { 
    alert("Указано недопустимое значение");
    day = Number(prompt("Введите любой день месяца"));
}

switch (true) {
    case day < 40 && day >= 30:
        alert("Четвертая декада");
        break;
    case day < 30 && day >= 20:
        alert("Третья декада");
        break;
    case day < 20 && day >= 10:
        alert("Вторая декада");
        break;
    case day < 10:
        alert("Первая декада");
        break;
    default:
        result = undefined;
        break;
}