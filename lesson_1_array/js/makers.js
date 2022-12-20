// pokeapi

// MAKERS COURSES

// N1
// let arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// N2
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());

// N3
// let arr =['js', 'css', 'jq'];
// console.log(arr.pop());

// N4
// let arr = [5, 2, 4, 2, 7];
// let newArr = arr.slice(0,3);
// console.log(newArr);

// N5
// let arr = [3, 4, 1, 2, 7];
// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);

// N6
// let arr =[1, 2, 3, 4, 5];
// arr.splice(0, 1);
// arr.splice(3,1);
// console.log(arr);

// N7
// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a,b) {
//     return b-a;
// });
// console.log(arr);

// N8
//var1
// let arr =["Apple", "Orange", "Banana", "Pineapple", "Cherry"] ;
// let longWord =[] ;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i].length>longWord.length) {
//         longWord =arr[i];
//     }
// }
// console.log(longWord);
// arr.sort(function(a,b) {
//     return b.length-a.length;
// });
// console.log(arr);

// var2
// let arr =["Apple", "Orange", "Banana", "Pineapple", "Cherry"] ;
// arr.sort((a,b) => b.length-a.length);
// console.log(arr[0],"\n", arr);


// N9
// let arr = [0, -11, 121, 3, 18];
// let max= arr[0];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]>max)
//       max=arr[i];
// }
// console.log(max);

// N10
// let arr = ['Джаз', 'Блюз'];
// arr.push("Рок-н-ролл");
// arr.splice(arr.length/2 ,1,"Классика");
// let arr2 = arr.shift();
// arr.unshift("Рэп","Регги");
// console.log(arr2);
// console.log(arr);


// N11
// let arr = ["Life", "is", "hard"] ;
// arr.splice(2,1, 'good');
// console.log(arr);

// N12
// let arr =[1,2,3,4];
// arr.reverse();
// console.log(arr);

// N13
// let arr = ['один','два','три','четыре'];
// arr.push(arr.splice(0,1));
// console.log(arr);

// N14
// let arr = ["один","два","три","четыре"];
// let str = arr.join('+');
// console.log(str);

// N15
// let arr =[11, 4, 6];
// let abs=arr.slice(0,1)-arr.slice(1,2);
// arr.push(abs);
// console.log(arr);

// N16
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr = [];
// arr=arr1.concat(arr2);
// console.log(arr);

// N17
// let arr = [1,2,3];
// arr.reverse();
// console.log(arr);

// N18
// let arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);

// N19
// let arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// N20
// let arr = [1,2,3];
// console.log(arr.shift());

// N21
// let arr =[1,2,3];
// console.log(arr.pop());

// N22
// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(1,2);
// console.log(arr);

// N23
// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(2, arr.length);
// console.log(res);

// N24
// let arr = [1, 2, 3, 4, 5];
// let newArr=arr.slice(-2);
// console.log(newArr);

// N25
// let arr = ["programming","code","javascript","react"];
// let newArr = [];
// for(let i =0; i<arr.length; i++) {
//     newArr.push(arr[i][0].toUpperCase()+arr[i].slice(1));
// }
// console.log(newArr);

// N26

//N27
let str = "codingiseasy";
str.split("").toUpperCase;
console.log(str);