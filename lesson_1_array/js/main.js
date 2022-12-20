// Операторы сравнение
// >< <= >= ==
// Логические операторы
// != && || 
// Условные операторы
// if else 
// if else if else 
// switch 

// Массив
// let users = ['Tom', 'Jessica', 'Piter', 'Helen', 'Bob'];

// push() - довабляет элемент/ы в конец
// users.push('Jack');
// users.push(1,2,3);
// let profiles = [
//     {name:'Bob'},
//     {name:'John'}
// ];
// users.push(profiles);
// console.log(users);

// pop() - удаляет элемент с конца массива ( возвращает удаленный элемент)
// let deletedElem = users.pop();
// // users.pop();
// console.log(users);
// console.log(deletedElem);

// unshift() - добавляет элемент/ы в начало массива
// users.unshift(1,2);
// users.unshift(true);
// console.log(users);

// shift() - удаляет и возвращает удаленный элемент с начала массива
// let elem = users.shift();
// console.log(users);
// console.log(elem);

// slice() - копирует элементы (старт индекс стоп индекс)б копирует начиная со старта включительно,
//  до стоп невkлючительно, не мутирует исходный массив
// let fruits = ['Apple', 'Orange', 'Peach', 'Banana', 'Passion fruit'];
// let res = fruits.slice(0,3); // ['Apple', 'Orange', 'Peach']
// let res = fruits.slice(2);  //['Peach', 'Banana', 'Passion fruit']
// let res =fruits.slice(); //['Apple', 'Orange', 'Peach', 'Banana', 'Passion fruit']
// let res = fruits.slice(1,3);
// console.log(res);  

// splice( с какого индекса начать, сколько элементов удалить, что подставить);
//мутирует исходный массив
// let fruits = ['Apple', 'Orange', 'Peach', 'Banana', 'Passion fruit'];
// let res =fruits.splice(0, 2); //['Peach', 'Banana', 'Passion fruit']
// let res = fruits.splice(1,1); //['Apple', 'Peach', 'Banana', 'Passion fruit']
// let res = fruits.splice(1, 1 , 'Grape'); //['Apple', 'Grape', 'Peach', 'Banana', 'Passion fruit']
// let res = fruits.splice(1, 0, "Grape", "Lemon"); //['Apple', 'Grape', 'Lemon', 'Orange', 'Peach', 'Banana', 'Passion fruit']
// let res = fruits.splice(0, fruits.length, 'Grape', 'Lemon');  //['Grape', 'Lemon']
// console.log(fruits);
// console.log(res);


// num++ - increment
// num-- - dicriment 
// ++num - post-increment
// --num - post -decriment 

// Цикл
// for - цикл(совершить кое-либо действие, n количество раз)
// for(переменная(видна только циклу,); условие при котором цикл будет работать; инкремент)
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for(let i=0; i < arr.length;i++) {
//     //  console.log(arr[i]);
//     let strElem = arr[i].toString();
//     // console.log(strElem);
//     newArr.push(strElem);
// };
// console.log(newArr);



// let arr = ['hello', 'world', 'Js', 'Tom', 'Python'];
// for(let i=0; i < arr.length;i++) {
//     console.log(arr[i]);
// }

// let users =['Tom', 'Jessica', 'Piter', 'Helen', 'John'];
// let updArr = [];
// for(let i=0; i < users.length; i++) {
//     updArr.push(users[i].length);
// }
// console.log(updArr);


    
