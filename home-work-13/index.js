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
let student = new Student('Khanh', [0, -4, 25, 15, 11, 28, -2, -10, -10]);


// ===== Задание #2 =====
let students = [];
console.log(students);

for (let i = 0; i < 5; i++) {
  students.push(student = new Student(`student${i}`));
}
  
console.log(students);