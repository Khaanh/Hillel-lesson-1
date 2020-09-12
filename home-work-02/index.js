// ======= *Основное задание* =======

function calc() {
  let op1 = +prompt('Введите первое число:', ''),
      op2 = +prompt('Введите второе число:', ''),
      sign;

      if ( (isNaN(op1)) || (isNaN(op2)) ) {
        alert('op1 или op2 не является числом!')
      } else {
        sign = prompt('знак между ними:', '');

        switch (sign) {
          case '-': {
            alert(op1 - op2);
            break;
          }
        
          case '+': {
            alert(op1 + op2);
            break;
          }
        
          case '/': {
            alert(op1 / op2);
            break;
          }
        
          case '*': {
            alert(op1 * op2);
            break;
          }
        
          case '**': {
            alert(op1 ** op2);
            break;
          }
        
          case '%': {
            alert(op1 % op2);
            break;
          }
        
          default: {
            alert('Что-то пошло не так...');
          }
        }
      }
}
// calc();

// ======= *Дополнительное задание* =======


let sub = function(n1, n2) {
  alert(n1 - n2);
}

let sum = function(n1, n2) {
  alert(n1 + n2);
}

let mul = function(n1, n2) {
  alert(n1 * n2);
}

let div = function(n1, n2) {
  alert(n1 / n2);
}

function calculate(n1, n2, sign) {
  n1 = +prompt('Введите число n1:', ''),
  n2 = +prompt('Введите число n2:', ''),
  sign;
  
  if ( (isNaN(n1)) || (isNaN(n2)) ) {
    alert('n1 или n2 не является числом!')
  } else {
    sign = prompt('Введите арифметический знак:', '');
    
    switch (sign) {
      case '-': {
        alert(n1 - n2);
        break;
      }
    
      case '+': {
        alert(n1 + n2);
        break;
      }
    
      case '/': {
        alert(n1 / n2);
        break;
      }
    
      case '*': {
        alert(n1 * n2);
        break;
      }
    
      case '**': {
        alert(n1 ** n2);
        break;
      }
    
      case '%': {
        alert(n1 % n2);
        break;
      }
    
      default: {
        alert('Что-то пошло не так...');
      }
    }
  }
}
calculate();
