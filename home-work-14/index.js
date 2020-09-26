function Human(config) {
  this.name = config.name;
  this.surname = config.surname;
  this.age = config.age;
}

function Teacher(config) {
  Human.call(this, config);
  this.group = config.group;
}

function Student(config) {
  Human.call(this, config);
  this.scores = config.scores;
}

Human.prototype = Object.assign(Human.prototype, {
  getFullName() {
    return `${this.name} ${this.surname}`;
  },

  setFullName(fullName) {
    fullName = fullName.split(" ");
    this.name = fullName[0];
    this.surname = fullName[1];
  },
})

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype = Object.assign(Student.prototype, {
  averageMark() {
    return this.scores.reduce((acc, curentVal) => acc + curentVal) / this.scores.length;
  },

  minMark() {
    return this.scores.sort((a, b) => b - a)[this.scores.length - 1];
  },

  maxMark() {
    return this.scores.sort((a, b) => a - b)[this.scores.length - 1];
  },

  getFullName() {
    return `${this.name} ${this.surname} - student`;
  }
})


Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype = Object.assign(Teacher.prototype, {
  getListOfNamesByAverageMark() {
    return this.group
      .sort((a, b) => b.averageMark() - a.averageMark())
      .map((student) => student.name);
  },

  getStudentByName(name) {
    return this.group.filter((item) => item.name == name)
  },

  removeStudentByName(name) {
    let index = this.group.filter((item) => item.name == name);
    return this.group.splice(this.group.indexOf(index), 1);
  },
  
  updateStudentByName(student, name) {
    this.group.splice(
      this.group.indexOf(this.getStudentByName(name)),
      1,
      new Student(student)
    );
  },
})

let group = [
  new Student({
    name: 'Stan',
    surname: 'Li',
    scores: [5, 1, 9, 2, 6],
  }),
  new Student({
    name: 'Stan',
    surname: 'Li2',
    scores: [5, 1, 9, 2, 6],
  }),
  new Student({
    name: 'Stefan',
    surname: 'Mark',
    scores: [3, 1, 2, 4, 6],
  }),
  new Student({
    name: 'Susian',
    surname: 'Donald',
    scores: [5, 2, 4, 9, 10],
  }),
  new Student({
    name: 'Can',
    surname: 'Swag',
    scores: [10, 8, 6, 4, 2],
  }),
  new Student({
    name: 'John',
    surname: 'Doe',
    scores: [3, 9, 4, 5, 2],
  }),
]

let person = new Human({
  name: 'Эдриен',
  surname: 'Броуди',
  age: 49,
})

let teacher = new Teacher({
  name: 'Генри',
  surname: 'Барт',
  group,
})

let student = new Student({
  name: 'Khanh',
  surname: 'Nguyen',
  scores: [12,3,4,2,12,3,5],
});


