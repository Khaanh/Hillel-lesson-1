
let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

// ===== Основное задание =====

function getYoungEmployees(arr) {

  let usersAge = arr.filter(user => user.age < 30);
  let usersName = usersAge.map(user => user.name)
  return usersName;
}
getYoungEmployees(users)


// ===== Дополнительное задание =====

function getAverageAge(arr) {
  let averageAge = arr.reduce(function (total, person) {

    return total + person.age / arr.length;
  }, 0)
}
getAverageAge(users)










