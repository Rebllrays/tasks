// 1. Дан массив let arr = [1, 2, 3, 4, 5, 6] - задача умножить четные числа в массиве на два.
// var1
// let arr = [1, 2, 3, 4, 5, 6];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]%2===0)
//     arr.splice(i, 1, arr[i]*2);
// }
// console.log(arr);

//var2
// let arr = [1, 2, 3, 4, 5, 6];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]%2===0)
//     arr[i]*=2;
// }
// console.log(arr);

// 2. Дан массив let names = ["Tom", "Jessica", "Richard", "Helen"]; 
// добавьте слово hello перед каждым элементом массива

// let names = ["Tom", "Jessica", "Richard", "Helen"];
// // let arr =[];
// for(let i=0; i<names.length; i++) {
//     // arr.push(names[i].concat(", hello")); 
//     // names.splice(i, 1, `hello, ${names}`);
//     names[i] = "Hello " + names[i];  
//     // "hello" += names[i];
// } console.log(names);

// 3. Дан массив let fruits = ["apple", "orange", "melon", "pineapple"]; 
// Добавьте арбуз между orange и melon и распечатайте результат

// let fruits = ["apple", "orange", "melon", "pineapple"];
// fruits.splice(2, 0, "watermelon");
// console.log(fruits);

// 4. // Запросите у пользователя слово и число одним промптом, 
// проверьте чтобы длина введенного слова была больше 5 символов и записана в верхнем регистре,
//  а число должно быть больше 7. Eсли всё в порядке напишите "good job", в обратном случае "error"

// let data = prompt("Enter some data").split(" ");

// if(data[0].length>5 && data[0]===data[0].toUpperCase() && +data[1]>7) {
//     console.log("good job");
// } else {
//     console.log("error");
// }

// 5. Дан массив let arr = ['Helen', 24, 'Tom', 43, 'Taylor', 21, 'Willow', 19, 'Austine', 41]; 
// Создайте объект, где ключом будет имя, а значением возраст, который идет после имени в массиве,
//  используйте цикл while. Выведите объект в консоль.
// let arr = ['Helen', 24, 'Tom', 43, 'Taylor', 21, 'Willow', 19, 'Austine', 41];
// **********///////////// ***********/////////////*************** \\\\\\\\\\\\\\ */ */
// let obj = {};

// let i = 0;

// while(i < arr.length) {
//     obj[arr[i]] = arr[i+1];
//     i+=2;
// }

// console.log(obj);

// 1. Дан массив let arr = [2, 54, 3, 234, 65, 84, 29, 45, 33, 28, 99];
// Найдите и выведите в консоль самое большое число. Нельзя использовать модуль Math
// let arr = [2, 54, 3, 234, 65, 84, 29, 45, 33, 28, 99];
// arr.sort((a,b) => b-a);
// console.log(arr[0]);

// 2. Дан массив let arr = ["hello", "javascript", "python", "makers", "array", 
// "object", "function", "value", "tapochki"]; 
// Переведите каждый третий элемент массива в верхний регистр

// let arr = ["hello", "javascript", "python", "makers", "array", "object", "function", "value", "tapochki"];
// for(let i=2; i<arr.length; i+=3) {
//     arr[i] = arr[i].toUpperCase()
// } 
// console.log(arr);

// 3. Запрашивать у пользователя имена студентов и возраст, если возраст больше 18, 
// то добавлять его в массив let milashki_JS29 = [], 
// а иначе добавлять в массив let vseOstalnye = [], 
// делать проверку есть ли такой студентов в списке, если есть то не добавлять

let milashki_JS29 = [];
let vseOstalnye = [];

while(true) {
    let unique =true;

    let userName = prompt("Enter Name");  //Запрашивать у пользователя имена студентов и возраст
    let userAge = prompt("Enter age");

    for(let i=0; i<milashki_JS29.length; i++) {
        if(userName==milashki_JS29[i].userName && userAge==milashki_JS29[i].userAge) {
            alert("Такой студент уже есть!");
            unique = false;
        }
    }
    if(!unique) continue;

    for(let i=0; i<vseOstalnye.length; i++) {
        if(userName==vseOstalnye[i].userName && userAge==vseOstalnye[i].userAge) {
            alert("Такой студент уже есть!");
            unique = false;
        }
    }
    if(!unique) continue;

    if(userAge >18) {
        milashki_JS29.push( {userName, userAge});
    } else {
        vseOstalnye.push({userName, userAge});
    }

    let ask =confirm("Добавить еще?");
    if(!ask) break;
} 
console.log(milashki_JS29, vseOstalnye);




// 4. Запрашивать у пользователя имена , пока он не решит остановиться, все имена положить в массив.
//  Нужно разбить их по парам в (в случайном порядке).
//   Если не четное количество имен, последнего человека без пары засунуть в пару с текстом 
// - 'без пары'; В консоли вывести вложенный массив, где внутренний массив будет одной парой; 
// example [['Sultan', 'Ilya'], ['Tom', 'Jerry'], ['Howard', 'без пары']]



// 5.1. Дан массив с постами:
// let posts = [
//     {
//       userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: "eum et est occaecati",
//       body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     },
//     {
//       userId: 1,
//       id: 6,
//       title: "dolorem eum magni eos aperiam quia",
//       body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     },
//     {
//       userId: 1,
//       id: 7,
//       title: "qui est esse",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     },
//     {
//       userId: 1,
//       id: 8,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     }
//   ]; 
// задача: сохранить все заголовки в отдельный массив, 
// при этом нужно сохранять только уникальные заголовки, 
// но также нужно подсчитать сколько раз встречается тот или иной заголовок в массиве, 
// в результате программа должна вывести следующий результат: 
// Заголовок: qui est esse встречается 2 раза в постах с id 7, 2
// Заголовок: eum et est occaecati встречается 1 раз в постe с id 4
// и тд

// 5.2. Используя предыдущий массив добавить возможность ставить постам лайк, 
// необходимо сначала добавить каждому посту ключ likes у которого значение массив

// 5.3. Если пользователь захочет поставить лайк, то спросить у него айди поста, которому нужно поставить лайк, 
// проверить есть ли такой пост, если есть, то запросить 
// у пользователя имя и добавить в нужный пост лайк в формате объекта, 
// примерный вид поста с объектом лайка: 
// {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\
//     nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     likes: [
//         {
//             user: 'Tom',
//             isLike: true
//         }
//     ]
// }

// 5.4. Добавить проверку на то, что пользователь уже ставил/не ставил лайк данному посту,
//  после того как запросим у пользователя какому посту нужно поставить лайк,
//  необходимо проверить возможно он уже ставил лайк, проверять нужно по имени, которое он введет, 
//  если он уже ставил лайк, то тогда нужно поменять значение у ключа isLike на false