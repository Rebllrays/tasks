// break - полная остановка цикла(выход из цикла),
// не будет перебирать элементы, которые идут после элемента сработал break

// continue - пропуск текущей итерации (код ниже, будет проигнорирован для данного элемента (который находится на итерации))
// let arr = ['Helen', 'Tom', 'Jessica', 'Bob', 'Jimm', 'Monica', 'John', 'Alice'];

// for(let i=0; i<arr.length; i++) {
//     console.log(`Цикл работает, элемент: ${arr[i]}`);
//     if(arr[i] ==  'Bob') {
//         console.log('Привет, Bob!');
//         break;
//         // continue;
//     };
//     console.log('К сожалению это не Bob!');
// }


// console.log(+'10');
// console.log(isNaN('10'));

// 3

// let data = prompt("Enter some data with space").split(' ');

// let strArr = [];
// let numsArr = [];

// for(let i=0; i < data.length; i++) {
//     if(isNaN(data[i])) {
//         strArr.push(data[i]);
//     } else {
//         numsArr.push(+data[i]);
//     };
// };
// console.log(strArr);
// console.log(numsArr);

//4. написать программу, которая будет спрашивать у пользователя добавить/удалить элемент из массива,
//  в зависимости от выбора программа должна либо добавлять данные в массив либо 
// запрашивать порядковый номер элемента который нужно удалить и удалять его из массива,
//  также программа должна после всех операций спрашивать хочет ли пользователь повторить действия если да, 
// то программа должна спросить снова удалить или добавить и тд, использовать цикл while

// const data = [];

// while(true) {
//     console.log(data);
//     let answ =confirm('Add or Delete?');
//     if(answ) {
//         let elem = prompt("Enter some elem");
//         data.push(elem);
//     } else {
//         let elemNum = +prompt(`Enter number of elem, choose from \n ${data}`);
//         data.splice(elemNum-1, 1);
//     };
//     let decide = confirm('Continue?');
//         if(!decide) break;
//         // if (decide === false) {
//         //     break;
//         // 
//     }

// 5. Написать программу, которая запрашивает у пользователя информацию пока пользователь не решит остановиться, 
// также необходимо сортировать данные введеные пользователем в 3 массива
// (эти массивы в свою очередь лежат в объекте под своими ключами):
//  положительные числа(число 0 сохранить к положительным числам),
//  отрицательные числа, строки, когда пользователь решить остановиться, 
// вывести алертом информацию о введенных данных, типа: 
// 'Введенные вами данные разделены на 3 масива, из них строки: strArr; 
// положительные числа: positiveNumArr; отрицательные числа: negativeNumArr'

// let dataObj = {
//     positiveArr : [],
//     negativeArr : [],
//     strArr : []
// };
// while(true) {
//      let data = prompt("Enter some data...");
//      if(isNaN(data)) {
//         dataObj.strArr.push(data);
//      } else if(data>=0) {
//         dataObj.positiveArr.push(+data);
//      } else {
//         dataObj.negativeArr.push(+data);
//      };
//      let answ =confirm("Continue?");
//      if(!answ) break;
// };

// alert(`Введенные данные разделены на 3 массива, из них сторки: ${dataObj.strArr}; положительные числа: ${dataObj.positiveArr};
// отрицательные числа: ${dataObj.negativeArr}`);

// 6. Запрашивать у пользователя логин, пароль и сохранять в виде объекта в массив
// (необходимо реализовать проверку на уникальность имени, а также на то, чтобы пароль был не менее 6-ти символов),
//  также каждому объекту добавлять ключ isAuth=false, пользователь может сохранять информацию, 
// пока сам не решит остановиться, затем спросить хочет ли он авторизоваться на сайте, если да,
//  то запросить логин и пароль, проверить на наличие такого объекта в массиве, и если все данные совпали,
//  то поменять значение ключа isAuth на true, в конце работы программы распечатать массив с пользователями

let arr =[];

while(true) {
    let unique = true;
    let userName = prompt("Enter your username");
    let userPassword = prompt("Enter your password");
    for(let i=0; i<arr.length; i++) {    //проверка на уникальность имени
        if(userName== arr[i].user) {
            alert('Like this login already exists');
            unique=false;
        }
    }
    if(!unique) continue;

    if(userPassword <= 6) {      //а также необходимо, чтобы пароль был не менее 6-ти символов
        alert('Паспорт должен быть меньше 6 символов');
        continue;
    }


    arr.push( {     //также каждому объекту добавлять ключ isAuth=false
        userName,
        userPassword,
        isAuth:false,
    }) ;

    let ask = confirm("Continue?");
    if(!ask) break;
    
    let auth = confirm("Authorization?");
    if(auth) {
        let login2 = prompt("Enter name");
        let password2 = prompt("Enter password")
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i].userName ===login2) {
            if(arr[i].userPassword === password2) {
                arr[i].isAuth =true;
                alert(`Welcome ${arr[i].userName}`);
            } else {
                alert("Пароли не совпадают");
                console.log(arr);
            }
        }
    }
}
console.log(arr);



