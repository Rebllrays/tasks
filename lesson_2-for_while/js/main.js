// Циклы for/while 
// join() - объединяет все элементы массива в строку
// let fruits = ['Apple', 'Orange', 'Grape'];
// let res =fruits.join('/'); //Apple/Orange/Grape
// console.log(res);

// split() - разбивает строку по указанному разделителю 
// (данные вернет в формате массива)
// let str = "13/12/2022";
// let newStr = str.split('/');
// console.log(newStr);

// reverse() - переворачивает массив (располагает элементы в обратном порядке)
// let str = ['Hello', 'Tom', 'Js'];
// let res = str.reverse(); //['Js', 'Tom', 'Hello']
// console.log(res);

// let str = 'Hello my name is Tom';
// console.log(str.split(' ').reverse().join(' '));

// sort() - сортирует элемеенты в массиве
// let arr = [1, 43, 43, 2500, 2 , 4, 10];
// let res = arr.sort((a, b) => a-b);
// console.log(res);
// let res2 = arr.sort((a, b) => b-a);
// console.log(res2);

// let arr = ['Apple', 'Tom', 'Js', 'Python', 'Jessica'];
// let res = arr.sort((a, b) => a.length-b.length);
// console.log(res);

// while()
// while (пока выражение выводит true) {
    // ...логика, которая будет выполняться
// }

// let counter = 0;
// while(counter<11) {
//     console.log(`Counter:${counter}`);
//     counter++;
// }

// let flag =true;
// while(flag) {
//     let data = prompt('Enter some data');
//     if(data === 'exit') {
//         flag = false;
//     };
// }; 

// for(let flag=true; flag; null) {
//     let data = prompt("Enter some data");
//     if(data ==="exit") {
//         flag = false;
//     };
// }

// 1. Запросить у пользователя 5 элементов и сохранить их в массив, 
// использовать методы массива

// let data = prompt("Enter some data with space").split(" ");
// console.log(data);

// 2.
// let data = prompt("Enter some nums").split(" ");
// let numsArr = [];
// for(let i =0; i< data.length; i++) {
//     numsArr.push(+data[i]);
// }
// // console.log(data); //['1', '2', '3', '4', '5']
// numsArr.sort((a, b) => a-b);
// console.log(numsArr);

// 3.
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// let positiveArr =[];
// let negativeArr = [];
// let zeroArr = [];
// for(let i =0; i<arr.length; i++) {
//     if(arr[i]>0) {
//         positiveArr.push(arr[i]);
//     } else if(arr[i]<0) {
//         negativeArr.push(arr[i]);
//     } else {
//         zeroArr.push(arr[i]);
//     };
// };
// alert(`Positive:${positiveArr.length}; negative: ${negativeArr.length}; zero: ${zeroArr.length}`);

// 4.

let arr = [
    [1, 2],
    [4, 5],
    ['hello', 'Js']
];

for (let i=0; i< arr.length; i++) {
    // console.log(arr[i]);
    for(let j=0; j< arr[i].length; j++) {
        console.log(arr[i][j]);
    }
};
