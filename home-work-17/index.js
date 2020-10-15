let formInfo = document.querySelector('#form-info');
let saveInfo = document.querySelector('#save-info');
let btnUpdate = document.querySelector('#update-btn');
let listGroup = document.querySelector('#list-group');

let name = formInfo.elements.name;
let surname = formInfo.elements.surname;
let age = formInfo.elements.age;
let scores = formInfo.elements.scores;
let groupList = [];
let updateList = [];
let student;
let teacher;

let a = [1, 2, 3, 4, 5, 6];


saveInfo.onclick = function() {
  let marks = scores.value.split(' ').map(item => Number(item));

  function valid(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 1 && arr[i] <= 10) {
        console.log(arr[i]);
      } else {
        console.log('недопустимый формат');
      }
    }
  }valid(marks);

  student = new Student ({
    name: name.value,
    surname: surname.value,
    age: age.value,
    scores: marks,
  });
  groupList.push(student);
  
  teacher = new Teacher ({
    name: 'Teacher',
    surname: 'Surname Teacher',
    age: 56,
    group: groupList, 
  });
}



btnUpdate.onclick = function() {

  groupList.forEach(student => {
    let li = document.createElement('li');
    li.append(`Имя: ${student.name} - Фамилия: ${student.surname} - Ср оценка: ${student.averageMark()}`)
    listGroup.append(li)
  })
  groupList = [];
}

// ==========================
class Human {
  constructor(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  setFullName(fullName) {
    fullName = fullName.split(" ");
    this.name = fullName[0];
    this.surname = fullName[1];
  }
}

class Student extends Human{
  constructor({name, surname, age, scores}) {
    super({name, surname, age})
    this.scores = scores;
  }

  averageMark() {
    return Math.ceil(this.scores.reduce((acc, curentVal) => acc + curentVal) / this.scores.length);
  }

  minMark() {
    return this.scores.sort((a, b) => b - a)[this.scores.length - 1];
  }

  maxMark() {
    return this.scores.sort((a, b) => a - b)[this.scores.length - 1];
  }

  getFullName() {
    return `${this.name} ${this.surname} - student`;
  }
}

class Teacher extends Human{
  constructor({name, surname, age, group}) {
    super({name, surname, age})
    this.group = group;
  }

  getListOfNamesByAverageMark() {
    return this.group
      .sort((a, b) => b.averageMark() - a.averageMark())
      .map((student) => `${student.name} - ${student.surname}`);
  }

  getStudentByName(name) {
    return this.group.filter((item) => item.name == name)
  }

  removeStudentByName(name) {
    let index = this.group.filter((item) => item.name == name);
    return this.group.splice(this.group.indexOf(index), 1);
  }
  
  updateStudentByName(student, name) {
    this.group.splice(
      this.group.indexOf(this.getStudentByName(name)),
      1,
      new Student(student)
    );
  }
}
