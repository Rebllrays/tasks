// classwork

// Простые методы массивов. Классная работа

// Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
let arr = ["dlrow", "olleH"];
let newStr =[];

newStr[0] = arr[1].split("").reverse().join("");
newStr[1] = arr[0].split("").reverse().join("");
console.log(newStr);

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let array = ['а', 'б', 'в'];
array.push(4,3,5,5);
console.log(array);

// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" 
// и этот же элемент подставтье после "Pineapple".
let fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
fruits.shift();
fruits.splice(2, 0, 'Apple');
console.log(fruits);


// Задание №4
// Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().

//Вариант 1
let arRay = [8, -7, -21, 44, 3];
arRay.sort((a,b) => b-a);
console.log(arRay[0]);

// Вариант 2
let max= arRay[0];
for(let i=0; i<arRay.length; i++) {
    if(arRay[i]>max)
      max=arRay[i];
}
console.log(max);