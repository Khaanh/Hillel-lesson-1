// ===== Задание #1 =====
/**
* 
* @param {string} name имя или порядковый номер студента
* @param {arr} arr массив оценок
*/
function Student(name, arr) {
  this.name = name;
  this.scores = arr;
  
  this.averageMark = () => {
    const averageScore = this.scores.reduce((acc, curentVal) => {
      let result = acc + curentVal;
      return result;
    })
    
    return averageScore / this.scores.length;
  };
  
  this.minMark = () => {
    let minScore = Math.min(...this.scores);
    return minScore;
  };
  
  this.maxMark = () => {
    let maxScore = Math.max(...this.scores);
    return maxScore;
  };
  
}
let student = new Student('Khanh', [4, 1, 8, 9, 10]);


// ===== Задание #2 =====
let students = [];

for (let i = 0; i < 5; i++) {
  let arr = [];
  let count = 0;

  while(count < 5) {
    arr.push(Math.ceil(Math.random() * 100))
    count++;
  }

  students.push(student = new Student(`Khanh ${i}`, arr));
}

function findMaxMark(arr) {
  let studentName = arr[0].name;
  let studentScore = arr[0].maxMark();

  for (let i = 0; i < arr.length; i++) {
    if (studentScore < arr[i].maxMark()) {
      studentName = arr[i].name;
      studentScore = arr[i].maxMark();
    }
  }

  return studentName
}

findMaxMark(students)