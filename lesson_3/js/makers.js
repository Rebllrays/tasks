// N1
// let count = 45;
// while(count <= 67) {
//     console.log(count);
//     count++;
// }

// N2
// for(let i=1; i<=20; i++) {
//     console.log(i);
// }

// N3
// let arr = ['Paul', 'John', 'George', 'Ringo', 'Yoko'];

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// N4
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// for(let i=0; i<arr.length; i++) {
//     if(arr[i]<5) 
//         console.log(arr[i]);
// }

// N5
// let i=0;
// while(i<3) {
//     console.log(`number ${i}`);
//     i++;
// }

// N6
// let str = '#';
// while(str.length<=7) {
//     console.log(str);
//     str+= "#";
// }

// N7
// let arr = [1, 2, 3, 4, 5];
// let sum = 0 ;
// for(let i=0; i<arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// N8 
// let num=[];
// for(let i=1; i<=100; i++) {
//     if(i%5===0 && i%3===0) {
//         console.log(`fizzbuzz${i}`);
//     } else if(i%5===0) {
//         console.log(`buzz${i}`);
//     } else if(i%3===0) {
//         console.log(`fizz ${i}`);
//     } 
// }

// N9
// let users = {John: 28, Mark: 30, David: 25, Richard: 42};
// let sum=0;
// for(let i in users) {
//     sum+= users[i];
    
// } console.log(sum);

// N10 
// let word = "makers";
// for (let i = 0; i < word.length; i++) {
// for (let j = i+1; j <= word.length; j++) {
// console.log(word.substring(i, j));
// }
// }

// N11 
// let num = 10;
// let count = [];

// for(i = 1; i <= num; i++) {
//        if (i % 2 === 0) {
//        count.push(i)
//     }
// }
// console.log(count.length);

// N12
// let num  = 5;  
// for ( let i = 1; i <= num; i++){  
//     if( i % 2 == 0){  
//     console.log(' # # # #');  
// } else {  
//     console.log('# # # # ');  
// }  
// }




// N14 --?
// let num = 10;

// for (let i = 2; i <= num; i++) { 
//   for (let j = 2; j < i; j++) { 
//     if (i % j != 0 && i%2 !=0) 
//      console.log(j);
//   }
// }

//N15
// let num =5;
// let sum =0;
// for(let i=1; i<=num; i++) {
//    sum+=i;
// }
// console.log(sum);

//N16 --?
// let str = 'Hello, world!';
// for(let i=0; i<str.length; i++) {
// console.log(str[i] );
// }

//N17
// let str = "Hello";
// for(let i=0; i<str.length; i++) {
//     if(i%2===0) {
//     console.log(str[i]);
//     }
// }

// N18
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   for(let i=0; i<matrix.length; i++) {
//       for(let j=0; j<matrix[i].length; j++) {
//           console.log(matrix[i][j]);
//       }
//   }

// N19
// const names = [
//     [
//       ['Helen', 'Tom'],
//       ['Jack', 'Peter']
//     ],
//     [
//       ['Jessica', 'Bob'],
//       ['Jimm', 'John']
//     ],
//     [
//       ['Alexa', 'Jessy'],
//       ['David', 'Paul']
//     ]
//   ];
  
//   for(let i=0; i<names.length; i++) {
//     for(let j =0; j<names[i].length; j++) {
//         if(names[j].length>4) 
//         console.log(names[i][j]);
//     }

//   }

// N20
// let arr = [1, 10, true, 'hello', 'JS', null, false, 0, 
// {title: 'Samsung', price: 1000}];

// for(let i=0; i<arr.length; i++) {
//     typeof arr[i] == "string";
//     typeof arr[i] == "number";
//         console.log(arr[i]);
    
// }

// N21
// let cars = [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0}
// ];

// for(let i of cars){
//     if(i.year<2007) 
//     i.sale=i.price - ((i.price*20)/100);
// }
//  console.log(cars);

//N22
// const data = {
//     electronics: ['Samsung', 'Apple', 'Xiaomi'],
//     fruits: ['Apple', 'Pineapple', 'Orange'],
//     cars: ['Audi', 'Mercedes', 'BMW']
//   };
  
//   while(true) {
//       let searchValue = prompt('');
//       for(let i in data) {
//               if(searchValue==i){
//               console.log(`Товар найден в категории: ${i}`);
//               } else {
//                   console.log("Товар не найден");
//               }
//           };
//       };


// N23
// let users = [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ];

// for(let i=0; i<users.length; i++) {
//     if(users.age>18) {
//         console.log(`Hello, (name), the grand sale has begun, prices are reduced by 20%!`);
//     }
// }

// N24

// N26
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr =[];
// for(let i of arr1) {
//     for(let j of arr2) {
       
        
//     }
// }


// N27
// let arr = [2, 5, 9, 15, 0, 4];
// for(let i of arr) {
//     if(i<3 && i>10) 
//    console.log(i);
// } 

//N28
// let arr = [2, 5, 9, 15, 0, 4];
// let sum=0;
// for(let i of arr) {
//     if(i%2===0) {
//         sum += i;
//     }
// }    console.log(sum);