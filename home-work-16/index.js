
let getInfo = document.getElementById('get-info');
let group = [];

getInfo.onclick = function() {
  let formInfo = document.getElementById('form-info');
  let formInfoChildren = formInfo.children;
  console.log(formInfoChildren.fName.value);
  console.log(formInfoChildren.lName.value);
  console.log(formInfoChildren.age.value);
  console.log(formInfoChildren.scores.value);

  let student = new Student({
    fname: formInfoChildren.fName.value,
    lname: formInfoChildren.lName.value,
    age: formInfoChildren.age.value,
    scores: formInfoChildren.scores.value,
  })

  group.push(student)
  console.log(student, group);
  let teacher = new Teacher(group);
  console.log(teacher);
}

class Student {
  constructor(config) {
    this.fname = config.fname
    this.lname = config.lname
    this.age = config.age
    this.scores = config.scores
  }
}

class Teacher {
  constructor(group) {
    this.group = group;
  }

  averageMark() {
    return this.scores.reduce((acc, curentVal) => acc + curentVal) / this.scores.length;
  }


}


let teacher2 = new Teacher(222);



// class Human {
//   constructor(config) {
//     this.name = config.name;
//     this.surname = config.surname;
//     this.age = config.age;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }

//   setFullName(fullName) {
//     fullName = fullName.split(" ");
//     this.name = fullName[0];
//     this.surname = fullName[1];
//   }

// }

// class Student extends Human{
//   constructor({name, surname, age, scores}) {
//     super({name, surname, age})
//     this.scores = scores;
//   }

//   averageMark() {
//     return this.scores.reduce((acc, curentVal) => acc + curentVal) / this.scores.length;
//   }

//   minMark() {
//     return this.scores.sort((a, b) => b - a)[this.scores.length - 1];
//   }

//   maxMark() {
//     return this.scores.sort((a, b) => a - b)[this.scores.length - 1];
//   }

//   getFullName() {
//     return `${this.name} ${this.surname} - student`;
//   }
// }

// class Teacher extends Human{
//   constructor({name, surname, age, group}) {
//     super({name, surname, age})
//     this.group = group;
//   }

//   getListOfNamesByAverageMark() {
//     return this.group
//       .sort((a, b) => b.averageMark() - a.averageMark())
//       .map((student) => student.name);
//   }

//   getStudentByName(name) {
//     return this.group.filter((item) => item.name == name)
//   }

//   removeStudentByName(name) {
//     let index = this.group.filter((item) => item.name == name);
//     return this.group.splice(this.group.indexOf(index), 1);
//   }
  
//   updateStudentByName(student, name) {
//     this.group.splice(
//       this.group.indexOf(this.getStudentByName(name)),
//       1,
//       new Student(student)
//     );
//   }
// }

// let student = new Student({
//   name: 'Student',
//   surname: 'Student surname',
//   age: 26,
//   scores: [1,2,3,4,5],
// })


// let human = new Human({
//   name: 'Khanh',
//   surname: 'Nguyen',
//   age: 26,
// })
