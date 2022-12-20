let num =100;
// while(num>110) {
//     console.log('сработает , только если условие выводит true');
//     console.log(num);
//     num--;
// };

// do {} while; - 
// do {
//     console.log('Сначала сделает, потом проверит');
//     console.log(num);
//     num--;
// } while(num>0);

// let arr = ['Tom', 'Jessica', 'Monica', 'Enrique', 'Miguel'];

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// let obj = {
//     name: "Tom",
//     age:35,
//     work: "IT"
// };

// for...in... - работает с объектами и масиивами (перебирает и ориентируется по ключам)

// for(let i in obj) {
//     console.log(i, ':',obj[i]);
// }

// for... of... - работает с итерируемыми структурами (массив), на каждой итерации возвращает
// let arr = ['Tom', 'Jessica', 'Monica', 'Enrique', 'Miguel'];

// let obj = {
//     name: "Tom",
//     age:35,
//     work: "IT"
// };

// for(let i of arr) {
//     console.log(i);
// }

// for(let i of obj) {
//     console.log(i);
// }


// 1
// let arr = [];
// let arr1 = ['Tom', 'Jessica', 'Miguel', 'Enrique', 'Monica'];
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i].length >= 5){
//         arr.push(arr1[i]);
//     }
// }
// console.log(arr);

//2
// let arr = [1, 2,0,6,9,0];
// for(let i=0; i<arr.length; i++){
//     arr[i]%2===0 ? ( arr[i] === 0 ? arr.splice(i, 1,"zero"):arr.splice(i,1, true)) : (arr.splice(i,1,"false"));
// } 
// console.log(arr);

// 3

// const goods = [
//   {
//     title: 'Samsung Galaxy s20 Ultra',
//     price: 800,
//     count: 11,
//     sale: 0
//   },
//   {
//     title: 'iPhone 13 Pro',
//     price: 1100,
//     count: 5,
//     sale: 0
//   },
//   {
//     title: 'Xiaomi Redmi Note 10',
//     price: 400,
//     count: 10,
//     sale: 0
//   },
//   {
//     title: 'Apple MacBook Air',
//     price: 1000,
//     count: 15,
//     sale: 0
//   },
//   {
//     title: 'Asus ROG',
//     price: 1500,
//     count: 4,
//     sale: 0
//   }
// ];

// for(let i of goods) {
//     // console.log(i); // выводится object
//     if(i.count>10 && i.price>=500) 
//         i.sale =10;
// };
// // console.log(goods);
// for(let i in goods) {
//     // console.log(goods[i]); // выводится object
//     // console.log(i); // выводит индексы
//     if(goods[i].sale !== 0)
//     alert(`На товар ${goods[i].title} объявлена скидка в ${goods[i].sale} %`);
// };

// 4
// const data = {
//   electronics: ['Samsung', 'Apple', 'Xiaomi'],
//   fruits: ['Apple', 'Pineapple', 'Orange'],
//   cars: ['Audi', 'Mercedes', 'BMW']
// };

// while(true) {
//     let searchValue = prompt('Что ищем?').toLowerCase();
//     for(let i in data) {
//         for(let j of data[i]) {
//             if(searchValue === j.toLowerCase()) {
//                 alert(`Товар найден в категории ${i}`);
//             };
//         };
//     };
//     let decide = confirm ('Найти еще?');
//     if(!decide) break;
// }


// let arr = ['Iliya', 'Polina', 'Sultan', 'Alex'];
// let arr2 =[];
// for(let i of arr){
//     arr2.push(i);
// }
// console.log(arr2);

// let arr = ['Iliya', 'Polina', 'Sultan', 'Alex'];
// let str ='';

// for(let i=0; i<arr.length; i++) {
//     str+=arr[i].concat(" ");
// } console.log(str);

// for(let i of arr) {
//     str+=i.concat(" ");
// } console.log(str);


//*********************************************************** */
// let nums = [1,2, 8];
// let sum =1;
// for(let i of nums) {
//     sum *= +i;
// } console.log(sum);




