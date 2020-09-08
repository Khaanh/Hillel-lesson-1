let frontend = ['I am', 'learing', 'JavaScript', 'by', 'practice', 'every', 'day'];


// Напишите функцию getYoungEmployees(), которая отфильтрует работников возрастом меньше 30 и вернет новый строковой массив ТОЛЬКО их имен.

// ==================================================================
let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

function getYoungEmployees(arr) {

  let usersAge = arr.filter(user => user.age < 30);
  let usersName = usersAge.map(user => user.name)

  return usersName;
}

getYoungEmployees(users)