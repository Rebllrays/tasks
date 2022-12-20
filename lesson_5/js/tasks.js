// 4. Запрашивать у пользователя имена , пока он не решит остановиться, 
// все имена положить в массив. Нужно разбить их по парам в (в случайном порядке). 
// Если не четное количество имен, последнего человека без пары засунуть в пару с текстом - 'без пары';
//  В консоли вывести вложенный массив, где внутренний массив будет одной парой; 
// example [['Sultan', 'Ilya'], ['Tom', 'Jerry'], ['Howard', 'без пары']]


let name = [];
let arr = [];
while(true) {
     let username = prompt("Enter your name");
     if(!username) break;
     
     for(let i=0; i<name.length; i+=2) {
        if(name.length%2 !=0) {
            arr.push("без пары");
        } else {

        }
     }

}


var names = ["Sean","Kyle","Emily","Nick","Cotter","Brian","Jeremy","Kimmy","Pat","Johnny"];

if (names.length % 2 != 0) {
    alert("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    var arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        var name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1,
            //           get the last value, otherwise get the first

        console.log(name1 + ' gets ' + name2);
    }
}

















 
// let name = [] 
 
// let size = 2; //размер подмассива 
 
// let res = []; //массив в который будет выведен результат. 
 
// while(true){ 
 
// let inputName = prompt('Enter Name') 
// name.push(inputName) 
 
 
// for (let i = 0; i <Math.ceil(name.length/size); i++){ 
//     res[i] = name.slice((i*size), (i*size) + size); 
 
// let para = "без пары" 
 
// if (res[i].length === 1) 
//   res[i] = [`${res[i]}, ${para}`]; 
// } 
 
// console.log(res); 
 
//   let decide = confirm('добавить ещё?') 
//   if(!decide) break; 
// }