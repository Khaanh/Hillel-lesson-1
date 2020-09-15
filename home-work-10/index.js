function structureUserInfo(name) {
  return function(role) {
    return {
      role,
      name,
    }
  }
}

structureUserInfo('Khanh')('Frontend');

// ===== Дополнительное задание =====

// С помощью замыкания напишите калькулятор, который бы работал следующим образом:

// const calculator = createCalculator(10); 
// calculator.add(45) // возвращает 55 
// calculator.sub(45) // возвращает -35 
// calculator.divide(5) // возвращает 2 
// calculator.mult(5) // возвращает 50 
// calculator.set(100) // устанавливает базовое значение в 100 
// calculator.mult(5) // возвращает 500


function createCalculator(number) {
  return function(b) {
    return number + b;
  }
}

// createCalculator(5)(10);
console.log(createCalculator(5)(10));