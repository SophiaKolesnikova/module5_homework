let a = prompt("Введите значение");
a = +a;
console.log(typeof a);
if (a % 2 === 0) {
    console.log("Четное");
} else if (a % 1 === 0) {
    console.log("Нечетное");
} else if (isNaN(a % 2)){
    console.log("Не число");
} else {
    console.log("Упс, кажется вы ошиблись")
}