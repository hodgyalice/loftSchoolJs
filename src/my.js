console.log("my is WORK");

// for(let z = 7; z < 100; z=z*2-6) {
//     console.log("z " + z);
// }


var sample = [1, 3, 5, 3, 7, 4, 12, 5, 72];

var newArr = [];
// Увеличить все элементы на 10
sample.forEach(function (el, index, arr){
   
    let temp;

    temp = el +10;
    newArr.push(temp);
    // Когда последний элемент массива будет добавлен в новый массив
    // По индексу - последний элемент
    // Длинна массива == последний индекс + 1
    // 2 == 3
    if (index == (arr.length - 1)) {
        console.log("forEach");
        console.log(newArr);
    };
    
});

// Выбрать все числа, которые больше 7
var newArr2 = sample.filter(function(el, index, arr){
    if (el > 7) {
        return el;
    }
    //return elem.indexOf("ad");
});
// var result = sample.filter(el => el > 7).filter(el => el < 20);

console.log("Фильтр");
console.log(newArr2);


// Пройти по всему массиву и увеличить ячейки на 10
var newArrMapped = sample.map(function(el) {
    return el + 10;
});
var newArrMapped2 = sample.map(el => el + 10).filter(el => el < 20).reduce((accum, el) => accum + el);
console.log("Мэп3");
console.log(newArrMapped2);

// (args) => {code}2

// Найти сумму всех ячеек массива
console.log("REDUCE");
var sum = sample.reduce(function(accum, el, index, arr){
    // console.log("accum " + index + ": " + accum);
    return accum + el;
})
var multiple = sample.reduce((accum, el) => accum * el);

console.log("SUM: " + sum);
console.log("MULTIPLE: " + multiple);