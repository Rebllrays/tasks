// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. 
// Выведите в консоль имена Mirdin и Aliia с помощью цикла for
let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for(let i=0; i<arr.length; i++) {
    if(i%2!=0)
    console.log(arr[i]);
} 

//Variant
// for(let i=0; i<arr.length; i++) {
//     arr[i] == "Mirdin" || arr[i] == "Aliia" ? console.log(arr[i]) : null
// }


// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
let array = [];
for(let i=1; i<11; i++) {
    array.push(i);
}
console.log(array);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
let massive = [];
for(let i=50; i< 100; i++) {
    massive.push(i);
}
console.log(massive);

// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
let massiv = [];
for(let i=50; i< 100; i++) {
    massiv.push(i);
}
console.log(massiv.reverse());

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль
// ["pen", "pineapple", "apple", "pen"]
let mas = ["pen", "pineapple", "apple", "pen"];
let maxStr = mas[0];

for(let i=0; i < mas.length; i++) {
    if(mas[i].length > maxStr.length) {
        maxStr=mas[i];  
    } 
}
console.log(maxStr);

// Задание №6
// Так же найдите самый короткий элемент этого же массива
let mass = ["pen", "pineapple", "apple", "pen"];
let minStr = mass[0];

for(let i=0; i < mass.length; i++) {
    if(mass[i].length < minStr.length) {
        minStr=mass[i];  
    } 
}
console.log(minStr);

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]
let nums = [1,2,3,4,5,6,7,8,9];
let evenNums = [];
for(let i=0; i<nums.length; i++) {
    if(nums[i]%2==0)
    evenNums.push(nums[i]);   
}
console.log(evenNums);




// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]
let arRay = [
    [1,2], 
    [3,4],
    [5,6]
];
for(let i=0; i<arRay.length; i++){
    for(let j=0; j<arRay[i].length; j++) {
        console.log(arRay[i][j]);
    }
}


// true|| false && !true ||false  => true